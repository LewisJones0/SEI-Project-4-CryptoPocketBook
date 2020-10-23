# pylint: disable=no-name-in-module, import-error
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import subaccount
from .serializers.common import SubaccountSerializer
from .serializers.populated import PopulatedSubaccountSerializer

# from django.contrib.auth import get_user_model
# User = get_user_model()

class SubaccountListView(APIView):
    ''' Handles all requests to /subaccounts (Get-Index + Post-Create) '''

    # GET LIST OF ALL SUBACCOUNT (ACROSS ALL USERS, PROBABLY SHOULD DELETE)
    def get(self, _pk):
        subaccount_list = subaccount.objects.all()
        serialized_subaccount_list = PopulatedSubaccountSerializer(subaccount_list, many=True)
        return Response(serialized_subaccount_list.data, status=status.HTTP_200_OK)

    # CREATE SUBACCOUNT
    def post(self, request):
        request.data['owner'] = request.user.id
        subaccount_to_create = SubaccountSerializer(data=request.data)
        if subaccount_to_create.is_valid():
            subaccount_to_create.save()
            return Response(subaccount_to_create.data, status=status.HTTP_201_CREATED)
        return Response(subaccount_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class SubaccountUserListView(APIView):

    permission_classes = (IsAuthenticated, )

    def get_subaccount(self, pk):
        try:
            return subaccount.objects.get(pk=pk)
        except subaccount.DoesNotExist:
            raise NotFound()

    def is_subaccount_owner(self, subaccount, user):
        if subaccount.owner.id != user.id:
            raise PermissionDenied()

    # GET ALL USER SUBACCOUNTS
    def get(self, request, pk):
        subaccount_list = subaccount.objects.all()
        self.is_subaccount_owner(subaccount_list, request.user)
        serialized_subaccount_list = PopulatedSubaccountSerializer(subaccount_list, many=True)
        return Response(serialized_subaccount_list.data, status=status.HTTP_200_OK)

    # DELETE A USERS SUBACCOUNT
    def delete(self, request, pk):
        subaccount_to_delete = self.get_subaccount(pk=pk)
        self.is_subaccount_owner(subaccount_to_delete, request.user)
        subaccount_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
