import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { withRouter } from 'react-router-dom'
import { logoutID, logoutToken } from '../../lib/auth'
import { Book, Power, Receipt, Plus } from 'react-bootstrap-icons'
import '../../styles/sidenav.scss'
import SubaccountCreate from '../subaccounts/subaccountcreate'
// import Button from 'react-bootstrap'

class Sidebar extends React.Component {
  state = {
    isOpen: false
  }

  openModal = () => this.setState({ isOpen: true })
  closeModal = () => this.setState({ isOpen: false })

  handleLogout = () => {
    logoutID()
    logoutToken()
    this.props.history.push('/')
  }

  handleSubaccount = () => {
    this.props.history.push('/subaccount')
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

          <NavItem eventKey="createSub" onClick={this.openModal}>
            <NavIcon onClick={this.openModal} >
              <Plus className="DashboardIcons" size={30} onClick={this.openModal}/>
              <i className="fa fa-fw fa-createSub" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText onClick={this.openModal}>
                New Subaccount
            </NavText>
          </NavItem>

          <SubaccountCreate isOpen={this.state.isOpen} closeModal={this.closeModal}/>

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