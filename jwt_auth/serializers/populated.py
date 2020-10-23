# pylint: disable=no-name-in-module, import-error
from subaccount.serializers.populated import PopulatedSubaccountSerializer
from transaction.serializers.common import TransactionSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):
    subaccounts = PopulatedSubaccountSerializer(many=True)
    owner_transactions = TransactionSerializer(many=True)