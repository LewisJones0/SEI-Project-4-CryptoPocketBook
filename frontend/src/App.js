import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavbarMaster from './components/common/navbar'
import Home from './components/common/home'

import Dashboard from './components/dashboard/dashboard'
import Subaccount from './components/subaccounts/subaccounts'
import SubaccountCreate from './components/subaccounts/subaccountcreate'

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <NavbarMaster>
        </NavbarMaster>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/subaccount/" component={Subaccount}/>
          <Route path="/subaccount/create" component={SubaccountCreate}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App