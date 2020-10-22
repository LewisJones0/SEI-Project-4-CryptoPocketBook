from django.db import models

class currency(models.Model):
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
