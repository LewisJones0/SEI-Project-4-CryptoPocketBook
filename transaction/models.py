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

    January = 'January'
    February = 'February'
    March = 'March'
    April = 'April'
    May = 'May'
    June = 'June'
    July = 'July'
    August = 'August'
    September = 'September'
    October = 'October'
    November = 'November'
    December = 'December'
    MONTH_CHOICES = [
        (January, 'January'),
        (February, 'February'),
        (March, 'March'),
        (April, 'April'),
        (May, 'May'),
        (June, 'June'),
        (July, 'July'),
        (August, 'August'),
        (September, 'September'),
        (October, 'October'),
        (November, 'November'),
        (December, 'December'),
    ]

    month_bought_at = models.CharField (
        max_length=9,
        choices=MONTH_CHOICES,
    )
    amount_bought = models.DecimalField(decimal_places=18, max_digits=36)
    price_bought_at = models.DecimalField(decimal_places=18, max_digits=36)
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
