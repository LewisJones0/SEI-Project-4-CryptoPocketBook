from django.db import models

class subaccount(models.Model):
    name = models.CharField(max_length=15)