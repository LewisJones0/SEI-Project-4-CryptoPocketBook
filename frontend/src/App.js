import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavbarMaster from './components/common/navbar'
import Home from './components/common/home'

import Dashboard from './components/dashboard/dashboard'
import Subaccount from './components/subaccounts/subaccounts'

// import Register from './components/auth/register'
// import Login from './components/auth/login'

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <NavbarMaster>
        </NavbarMaster>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/subaccount/:id" component={Subaccount}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App