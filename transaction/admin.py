# pylint: disable=no-name-in-module, import-error
from django.contrib import admin
from .models import transaction

admin.site.register(transaction)
