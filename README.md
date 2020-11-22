# SEI Project Four: Crypto Pocketbook

Deployed App: https://cryptopocketbook.herokuapp.com/

## TLDR
- **Project Duration** - 7 Days
- **App** - Financing Organiser
- **Technologies Used** - React, JavaScript, Python, Django, React-router-dom, React-Bootstrap, Axios, Sass, PostgresQL
- **Developer Tools** - VSCode, Eslint, Git, GitHub, NPM
- **Teammates** - Solo Project
____

### Brief

Full-Stack application

- Create a Full-Stack application
- Python Django API utilising Django REST framework to serve data on front-end
- Consume back-end data with a React front-end
- Must be a complete product with means multiple relationships and CRUD functionality for at least a couple of models
____

### Application Functionalities

- User registration & login
- Check live data for support cryptocurrency prices (Tradingview widget)
- Create "Subaccounts" on the useraccount (E.g. an account to track assets on Kraken, FTX, Binance, Coinbase)
- Add transactions into subaccount (5 supported assets, amount bought, price bought at, month bought at)
- Homepage totals all assets in every subaccount and the amount it was bought for, it then compares it against the current price to calculate your PnL

____

## Frontpage
![frontpage](/readmepictures/frontpage.png)
____

# Abstract: Post Project Thoughts and Project Overview

For the last project of the course, I wanted to work on a product that would have the potential to deliver some value to the Cryptocurrency space. The products utility is relatively straightforward. It totals the amount of money you've invested over the supported currencies across multiple platforms and calculates your PnL.

This was the first project where I utilised Python and Django for the back-end. I found utilising Python to build relationships for the database and building API controllers alot harder than it was in the previous project where we used Node.js.

Overall I am very happy with how this project has worked out. It is a functioning product that a user would be able to gain useful information out of if they inputted their own data into it.

Other features that I initially wanted to add were cuting during development. This was due to the amount of time it took me to work on core functionality. The two main other features I wanted to implement were PnL graphs and API's implementations to actual exchanges (so users could simply log into their exchange and my applications would automatically integrate their wallet data).




____

# Some Product Screenshots


## Homepage
![homepage](/readmepictures/homepage.png)


## Subaccount Page
![subaccountpage](/readmepictures/subaccountpage.png)

## Transaction Modal
![transactionmodal](/readmepictures/transactionModal.png)

____

# Successes, Challenges and Bugs

