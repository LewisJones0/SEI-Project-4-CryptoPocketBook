# pylint: disable=no-name-in-module, import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from ..serializers.common import SubaccountSerializer

class PopulatedSubaccountSerializer(SubaccountSerializer):
    owner = NestedUserSerializer()