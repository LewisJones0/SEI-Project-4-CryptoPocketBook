import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { withRouter } from 'react-router-dom'
import { logoutID, logoutToken } from '../../lib/auth'
import { Book, Power, Receipt, Plus } from 'react-bootstrap-icons'
import { getUser } from '../../lib/api'
import '../../styles/sidenav.scss'

class Sidebar extends React.Component {
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

  handleLogout = () => {
    logoutID()
    logoutToken()
    this.props.history.push('/')
  }

  handleSubaccount = () => {
    this.props.history.push('/subaccount')
  }

  handleSubaccountCreation = () => {
    this.props.history.push('/create/')
  }

  handleDashboard = () => {
    this.props.history.push('/dashboard')
  }
  render() {
    // const { subaccounts } = this.state.subaccounts
    return (
      <SideNav>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home" onClick={this.handleDashboard}>
            <NavIcon onClick={this.handleDashboard}>
              <Book className="DashboardIcons" size={30} onClick={this.handleDashboard}/>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText onClick={this.handleDashboard}>
                  Dashboard
            </NavText>
          </NavItem>
          <NavItem eventKey="subaccounts" onClick={this.handleSubaccount}>
            <NavIcon onClick={this.handleSubaccount}>
              <Receipt className="DashboardIcons" size={30} onClick={this.handleSubaccount}/>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText onClick={this.handleSubaccount}>
                Subaccounts
            </NavText>
          </NavItem>

          <NavItem eventKey="createSub" onClick={this.handleSubaccountCreation}>
            <NavIcon onClick={this.handleSubaccountCreation} >
              <Plus className="DashboardIcons" size={30} onClick={this.handleSubaccountCreation}/>
              <i className="fa fa-fw fa-createSub" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText onClick={this.handleSubaccountCreation}>
                New Subaccount
            </NavText>
          </NavItem>

          <br></br>

          <NavItem eventKey="logout" onClick={this.handleLogout}>
            <NavIcon onClick={this.handleLogout} >
              <Power className="DashboardIcons" size={30} onClick={this.handleLogout}/>
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