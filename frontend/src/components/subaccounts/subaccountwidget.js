import React from 'react'
import { Table, Button } from 'react-bootstrap'
import NewTransaction from './addtransactionModal'

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

class SubaccountWidget extends React.Component {
  state = {
    show: false
  }

  showModal = e => {
    this.setState({
      show: true
    })
  }

  closeModal = e => {
    this.setState({
      show: false
    })
  }




  render() {
    TransactionMapping(this.props.transactions)
    return (
      <>
        <h4 className="CreateSubAccName">Subaccount Name: {this.props.name}</h4>
        <Table className='SubACreationTable' striped bordered hover variant="dark">
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
            { this.props.transactions.map(subaccount => (
              <TransactionMapping
                key={subaccount.id}
                {...subaccount} />
            )) }
          </tbody>
        </Table>
        <Button onClick={e => {
          this.showModal()
        }} className="AddTransButton">Add a transaction to {this.props.name}</Button>
        <NewTransaction show={this.state.show} closeModal={this.closeModal} subaccountowner={this.props.id}/>
      </>
    )
  }
}

export default SubaccountWidget