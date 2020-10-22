# pylint: disable=no-name-in-module, import-error
from django.urls import path
from .views import SubaccountListView

urlpatterns = [
    path('', SubaccountListView.as_view())
]
