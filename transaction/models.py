from django.db import models

class transaction(models.Model):
    currency = models.CharField(max_length=15, unique=True)
    amount_bought = models.PositiveIntegerField()
    price_bought_at = models.PositiveIntegerField()
    date_bought_at = models.PositiveIntegerField()
    owner = models.ForeignKey(
        'subaccount.subaccount',
        related_name="subaccountid",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Transaction Currency: {self.currency} - Amount: {self.amount_bought}'
