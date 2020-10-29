import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'


const Home = () => {
  return (
    <Jumbotron fluid>
      <Container className="hero"> 
        <h1 className='HomeTitleH1'>What is Crypto Pocketbook?</h1>
        <br></br>
        <h2 className='HomeTitleH2'>Crypto Pocketbook is a online application that enables you to track the total amount of cryptocurrencies that you have across multiple platforms. 
          <br></br>
          <br></br>
          
        It also enables you to see the total cost of your investment and it calculates your total profits based upon the assets current price.</h2>
      </Container>
    </Jumbotron>
  )
}

export default Home