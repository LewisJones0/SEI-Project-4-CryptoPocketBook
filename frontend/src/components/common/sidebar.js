import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { withRouter } from 'react-router-dom'
import { logoutID, logoutToken } from '../../lib/auth'
import { Book, Power, Receipt, Plus } from 'react-bootstrap-icons'
import { getUser } from '../../lib/api'
import NewSubaccount  from './newsubaccount'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
// import { Container, Row, Form, Spinner } from 'react-bootstrap'

class Sidebar extends React.Component {
  state = {
    subaccounts: {},
    show: false
  }

  async componentDidMount() {
    const getData = await getUser()
    console.log(getData)
    this.setState({
      subaccounts: getData.data.subaccounts
    })
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

  handleLogout = () => {
    logoutID()
    logoutToken()
    this.props.history.push('/')
  }

  render() {
    // const { subaccounts } = this.state.subaccounts
    return (
      <SideNav>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <Book className="DashboardIcons" size={30}/>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                  Dashboard
            </NavText>
          </NavItem>
          <NavItem eventKey="subaccounts">
            <NavIcon>
              <Receipt className="DashboardIcons" size={30}/>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Subaccounts
            </NavText>
            <NavItem eventKey="subaccounts">
              <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Charts
              </NavText>
              {/* <Row xs={1} xl={3}>
                {subaccounts.map(subaccount => (
                  <div
                    key={subaccounts._id}
                    {...subaccounts}></div>
                ))}
              </Row> */}
            </NavItem>
          </NavItem>
          <br></br>



            {/* <Subaccount show={this.state.show} closeModal={this.closeModal}></Subaccount> */}





          {/* <NavItem eventKey="createSub" onClick={this.showModal}>
            <NavIcon onClick={this.showModal} >
              <Plus className="DashboardIcons" size={30}/>
              <i className="fa fa-fw fa-createSub" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NewSubaccount onClick={this.showModal}>
                  New Subaccount
            </NewSubaccount>
          </NavItem> */}

          <br></br>

          <NavItem eventKey="logout" onClick={this.handleLogout}>
            <NavIcon onClick={this.handleLogout} >
              <Power className="DashboardIcons" size={30}/>
              <i className="fa fa-fw fa-logout" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText onClick={this.handleLogout}>
                  Logout
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}

export default withRouter(Sidebar)