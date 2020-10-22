from django.db import models

class transaction(models.Model):
    Bitcoin = 'BTC'
    Ethereum = 'ETH'
    Chainlink = 'LINK'
    Litecoin = 'LTC'
    Pokadot = 'DOT'
    YearnFinance = 'YFI'
    CURRENCY_CHOICES = [
        (Bitcoin, 'Bitcoin'),
        (Ethereum, 'Ethereum'),
        (Chainlink, 'Chainlink'),
        (Litecoin, 'Litecoin'),
        (Pokadot, 'Pokadot'),
        (YearnFinance, 'YearnFinance'),
    ]
    Current_Choice = models.CharField(
        max_length=4,
        choices=CURRENCY_CHOICES,
        default=Bitcoin,
    )

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
