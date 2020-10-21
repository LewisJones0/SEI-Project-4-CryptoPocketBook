from django.db import models

class transaction(models.Model):
    subaccount = models.CharField(max_length=30)
    currency = models.CharField(max_length=30)
    amount_bought = models.PositiveIntegerField()
    price_bought_at = models.PositiveIntegerField()
    date_bought_at = models.CharField(max_length=30)