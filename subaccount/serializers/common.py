# pylint: disable=no-name-in-module, import-error
from rest_framework import serializers
from ..models import subaccount

class SubaccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = subaccount
        fields = '__all__'