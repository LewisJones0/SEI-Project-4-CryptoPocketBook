# pylint: disable=no-name-in-module, import-error
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import transaction
from .serializers.common import TransactionSerializer
from .serializers.populated import PopulatedTransactionSerializer

class SubaccountTransactions(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request):
        transaction_list = transaction.objects.all()
        serialized_transaction_list = PopulatedTransactionSerializer(transaction_list, many=True)
        return Response(serialized_transaction_list.data, status=status.HTTP_200_OK)

    # def is_subaccount_owner(self, subaccount, user):
    #     if subaccount.owner.id != user.id:
    #         raise PermissionDenied()

    # # GET ALL USER SUBACCOUNTS
    # def get(self, request, pk):
    #     subaccount_list = subaccount.objects.all()
    #     self.is_subaccount_owner(subaccount_list, request.user)
    #     serialized_subaccount_list = PopulatedSubaccountSerializer(subaccount_list, many=True)
    #     return Response(serialized_subaccount_list.data, status=status.HTTP_200_OK)