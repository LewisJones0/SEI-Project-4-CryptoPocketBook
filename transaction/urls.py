# pylint: disable=no-name-in-module, import-error
from django.urls import path
from .views import SubaccountTransactions

urlpatterns = [
    path('', SubaccountTransactions.as_view()),
    path('<int:pk>/', SubaccountTransactions.as_view())
]
