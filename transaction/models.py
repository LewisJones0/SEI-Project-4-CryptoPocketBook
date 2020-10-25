# pylint: disable=no-name-in-module, import-error
from django.db import models 

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

    Jan = 'Jan'
    Feb = 'Feb'
    Mar = 'Mar'
    Apr = 'Apr'
    May = 'May'
    Jun = 'Jun'
    July = 'July'
    Aug = 'Aug'
    Sep = 'Sep'
    Oct = 'Oct'
    Nov = 'Nov'
    Dec = 'Dec'

    MONTH_CHOICES = [
        (Jan, 'Jan'),
        (Feb, 'Feb'),
        (Mar, 'Mar'),
        (Apr, 'Apr'),
        (May, 'May'),
        (Jun, 'Jun'),
        (July, 'July'),
        (Aug, 'Aug'),
        (Sep, 'Sep'),
        (Oct, 'Oct'),
        (Nov, 'Nov'),
        (Dec, 'Dec'),
    ]

    date_bought_at = models.CharField (
        max_length=4,
        choices=MONTH_CHOICES,
    )
    amount_bought = models.PositiveIntegerField()
    price_bought_at = models.PositiveIntegerField()
    # date_bought_at = models.DateField(default=datetime.now)


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
