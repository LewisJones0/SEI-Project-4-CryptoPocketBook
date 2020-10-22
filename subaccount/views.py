# pylint: disable=no-name-in-module, import-error
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render

from .models import subaccount
from .serializers.common import SubaccountSerializer
from .serializers.populated import PopulatedSubaccountSerializer

# from django.contrib.auth import get_user_model
# User = get_user_model()

class SubaccountListView(APIView):
    ''' Handles all requests to /subaccounts (Get-Index + Post-Create) '''

    def get(self, request):
        subaccount_list = subaccount.objects.all()
        serialized_subaccount_list = PopulatedSubaccountSerializer(subaccount_list, many=True)
        return Response(serialized_subaccount_list.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        subaccount_to_create = SubaccountSerializer(data=request.data)
        if subaccount_to_create.is_valid():
            subaccount_to_create.save()
            return Response(subaccount_to_create.data, status=status.HTTP_201_CREATED)
        return Response(subaccount_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)