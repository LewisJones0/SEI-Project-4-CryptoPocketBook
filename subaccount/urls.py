# pylint: disable=no-name-in-module, import-error
from django.urls import path
from .views import SubaccountListView, SubaccountUserListView

urlpatterns = [
    path('', SubaccountListView.as_view()),
    path('<int:pk>/', SubaccountUserListView.as_view())
]
