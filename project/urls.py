# pylint: disable=no-name-in-module, import-error
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/subaccount/', include('subaccount.urls')),
    path('api/transaction/', include('transaction.urls')),
    path('api/auth/', include('jwt_auth.urls'))
]
