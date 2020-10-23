# pylint: disable=no-name-in-module, import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from ..serializers.common import SubaccountSerializer
from transaction.serializers.common import TransactionSerializer

class PopulatedSubaccountSerializer(SubaccountSerializer):
    transactions = TransactionSerializer(many=True)