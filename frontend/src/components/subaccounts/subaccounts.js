import React from 'react'
import { getUser } from '../../lib/api'
import { Container, Col, Row, Jumbotron, Spinner } from 'react-bootstrap'
import SubaccountWidget from './subaccountwidget'

class Subaccount extends React.Component {
  state = {
    subaccounts: []
  }

  async componentDidMount() {
    const getData = await getUser()
    console.log(getData)
    this.setState({
      subaccounts: getData.data.subaccounts
    })
  }


  render() {
    if (Object.keys(this.state.subaccounts).length === 0) {
      return (
        <>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          
          <Jumbotron fluid>
            <Container className="subaccounthero"> 
              <h1 className='subaccountTitleH1'>There are currently no Subaccounts attached to this username.</h1>
              <br></br>
              <h2 className='subaccountTitleH2'>Please press the '+' button on the left to create a Subaccount</h2>
              <br></br>
            </Container>
          </Jumbotron>
        </>
      )
    }
    return (
      <>
        <Container fluid className="pocketbook-banner">
          <h1 className='pocketbookBannerH1'>Subaccounts</h1>
        </Container>
        
        <Row className="subaccountDashboard">
          <Col xs={12} md={12} xl={12} className="CreateSubaccountRow">
            { this.state.subaccounts.map(subaccount => (
              <SubaccountWidget
                key={subaccount.id}
                {...subaccount} />
            )) }
          </Col>
        </Row>
      </>
    )
  }
}


export default Subaccount