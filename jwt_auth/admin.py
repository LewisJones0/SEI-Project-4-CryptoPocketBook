# pylint: disable=no-name-in-module, import-error
from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model()

admin.site.register(User)
