# pylint: disable=no-name-in-module, import-error
from django.contrib import admin
from .models import subaccount

admin.site.register(subaccount)
