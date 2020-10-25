import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { withRouter } from 'react-router-dom'
import { logoutID, logoutToken } from '../../lib/auth'
import { Book, Power, Receipt } from 'react-bootstrap-icons'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Sidebar extends React.Component {



  handleLogout = () => {
    logoutID()
    logoutToken()
    this.props.history.push('/')
  }

  render() {
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
                  <NavItem eventKey="charts/linechart">
                      <NavText>
                          Line Chart
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="charts/barchart">
                      <NavText>
                          Bar Chart
                      </NavText>
                  </NavItem>
              </NavItem>
              <br></br>
              <NavItem eventKey="charts" onClick={this.handleLogout}>
                  <NavIcon onClick={this.handleLogout} >
                      <Power className="DashboardIcons" size={30}/>
                      <i className="fa fa-fw fa-chart" style={{ fontSize: '1.75em' }} />
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