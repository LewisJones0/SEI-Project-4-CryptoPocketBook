import React from 'react'
import { Table, Button } from 'react-bootstrap'

function TransactionMapping(transactions, name) {
  if (Object.keys(transactions).length > 0) { 
    return (
      <tr>
        <td>{transactions.id}</td>
        <td className='transactionUppercase'>{transactions.currency}</td>
        <td>{transactions.amount_bought}</td>
        <td>{transactions.month_bought_at}</td>
        <td>${transactions.price_bought_at}</td>
      </tr>
    )
  } else if (Object.keys(transactions).length < 0){ 
    return (
      <tr>
        <td>{name} currently has no transactions</td>
      </tr>
    )}
  
}


const SubaccountWidget = ({ name, transactions }) => {
  TransactionMapping(transactions)
  return (
    <>
      <h4 className="CreateSubAccName">Subaccount Name: {name}</h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Currency</th>
            <th>Amount Bought</th>
            <th>Month Bought At</th>
            <th>Price Bought At</th>
          </tr>
        </thead>
        
        <tbody>
          { transactions.map(subaccount => (
            <TransactionMapping
              key={subaccount.id}
              {...subaccount} />
          )) }
        </tbody>
      </Table>
      <Button className="AddTransButton">Add a transaction to {name}</Button>
    </>
  )
}

export default SubaccountWidget