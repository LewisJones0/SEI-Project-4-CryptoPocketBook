# pylint: disable=no-name-in-module, import-error
from django.db import models 
from datetime import datetime

class transaction(models.Model):
    Bitcoin = 'bitcoin'
    Ethereum = 'ethereum'
    Chainlink = 'chainlink'
    Litecoin = 'litecoin'
    Pokadot = 'pokadot'
    YearnFinance = 'yearnfinance'
    CURRENCY_CHOICES = [
        (Bitcoin, 'Bitcoin'),
        (Ethereum, 'Ethereum'),
        (Chainlink, 'Chainlink'),
        (Litecoin, 'Litecoin'),
        (Pokadot, 'Pokadot'),
        (YearnFinance, 'YearnFinance'),
    ]
    currency = models.CharField(
        max_length=12,
        choices=CURRENCY_CHOICES,
        default=Bitcoin,
    )

    amount_bought = models.PositiveIntegerField()
    price_bought_at = models.PositiveIntegerField()
    date_bought_at = models.DateField(default=datetime.now)
    subaccountowner = models.ForeignKey(
        'subaccount.subaccount',
        related_name="transactions",
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="owner_transactions",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Transaction Currency: {self.currency} - Amount: {self.amount_bought}'
