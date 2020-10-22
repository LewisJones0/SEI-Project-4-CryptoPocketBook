# pylint: disable=no-name-in-module, import-error
from subaccount.serializers.common import SubaccountSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    created_subaccounts = SubaccountSerializer(many=True)