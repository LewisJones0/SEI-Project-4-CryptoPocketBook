import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'


const SubaccountWidget = ({ name, transactions }) => {
  return (
    <Jumbotron fluid>
      <Container className="1"> 
      {/* <div>{name}</div> */}
      <div>{transactions}</div>
      </Container>
    </Jumbotron>
  )
}

export default SubaccountWidget