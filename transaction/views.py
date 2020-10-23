# pylint: disable=no-name-in-module, import-error
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import transaction
from .serializers.common import TransactionSerializer
from .serializers.populated import PopulatedTransactionSerializer

class AllSubaccountTransactions(APIView):

    permission_classes = (IsAuthenticated, )

    # GET TRANSACTIONS
    def get(self, _request):
        transaction_list = transaction.objects.all()
        serialized_transaction_list = PopulatedTransactionSerializer(transaction_list, many=True)
        return Response(serialized_transaction_list.data, status=status.HTTP_200_OK)

    # CREATE TRANSATION
    def post(self, request):
        request.data['owner'] = request.user.id
        transaction_to_create = TransactionSerializer(data=request.data)
        if transaction_to_create.is_valid():
            transaction_to_create.save()
            return Response(transaction_to_create.data, status=status.HTTP_201_CREATED)
        return Response(transaction_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class SubaccountTransactions(APIView):
    ''' Handles requests for transactions, get-show transaction, put/edit, delete'''

    permission_classes = (IsAuthenticated, )

    def get_transaction(self, pk):
        try:
            return transaction.objects.get(pk=pk)
        except transaction.DoesNotExist:
            raise NotFound()

    def is_transaction_owner(self, transaction, user):
        if transaction.owner.id != user.id:
            raise PermissionDenied()

        # GET SINGLE TRANSATION
    def get(self, _request, pk):
        transaction = self.get_transaction(pk=pk)
        serialized_transaction = PopulatedTransactionSerializer(transaction)
        return Response(serialized_transaction.data, status=status.HTTP_200_OK)

        # UPDATE TRANSATION
    def put(self, request, pk):
        transaction_to_update = self.get_transaction(pk=pk)
        self.is_transaction_owner(transaction_to_update, request.user)
        updated_transaction = TransactionSerializer(transaction_to_update, data=request.data)
        if updated_transaction.is_valid():
            updated_transaction.save()
            return Response(updated_transaction.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_transaction.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        # DELETE TRANSATION
    def delete(self, request, pk):
        transaction_to_delete = self.get_transaction(pk=pk)
        self.is_transaction_owner(transaction_to_delete, request.user)
        transaction_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)