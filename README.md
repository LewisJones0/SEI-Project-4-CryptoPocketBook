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

Other features that I initially wanted to add were cut during development. This was due to the amount of time it took me to work on core functionality. The two main other features I wanted to implement were PnL graphs and API implementations to actual exchanges (so users could simply log into their exchange and my applications would automatically integrate their wallet data). I will be continuing this project into the future and will integrate the features I was unable to during the production of this repository.

____

# Successes, Challenges and Bugs

## Successes: 

The biggest success of this project for me was how all of the different systems interacted together to produce a PnL price. On the backend - all of the systems transactions are located on one database. Each subaccount and transaction is associated to one user account. The data that is called to the front-end from the back-end compiles all user data into one API call. This makes totaling transaction data into one value easier. 

From there, there is a API call to a price tracking website (Coingecko) that brings the assets live price onto the frontend. The state of the PnL is calculated as the total spent minus the total value of the assets in the users possession.
____

## Challenges - The Crunch:

Along side the success of the PnL calculator came a large challenge that I was unable to refine given the time limit (See two code examples below).

The code to calculate the total amount of an asset, the total price spent of the bought asset and the comparison against the API price is quite good. But the price to apply this code to each asset is extremely repetitive and not very scaleable. 

Due to time constraints - I had to throw together what code I could to make this functionality work so the project was in a relatively good spot for the deadline. As I move forward to refineing and developing this codebase into the future - I need to find out ways make this code more scaleable so I can add more assets into the application with limited extra code added.

## Code Example 1
![homepage](/readmepictures/codeexample.png)
## Code Example 2
![homepage](/readmepictures/codeexample2.png)
__________

## Key Learnings 
1. Executing plans on features I've never programmed before (Graphs) can invalidate the overarching plan of the project. This feature had to be scrapped in order for there to be a product at the end of the project week. Understanding that "this will take too long" is an import skill to have during intensive projects with tight deadlines.
2. Sometimes code needs to be developed quickly and refined at a later date. I realised this on the previous section (Challenges - The Crunch).

## Future Features
1. Adding graphs onto the dashboard page (Monthly charting PnL - I did take some time into researching D3 to create the graphs but I ended up scrapping the idea to preserve time)
2. Two factor authentication on the users account.
3. Profile details edit page - email & password alterations
4. Hook up APIs of certain popular exchanges to be able to extract wallet data. (E.g. FTX, Binance, Coinbase, Kraken etc.)
5. Refactoring code that was thrown together quickly to be more elegent and more readable.
_______

# Some Product Screenshots


## Homepage
![homepage](/readmepictures/homepage.png)

## Subaccount Page
![subaccountpage](/readmepictures/subaccountpage.png)

## Transaction Modal
![transactionmodal](/readmepictures/transactionModal.png)
