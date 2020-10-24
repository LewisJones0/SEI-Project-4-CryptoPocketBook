import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavbarMaster from './components/common/navbar'
import Home from './components/common/home'

import Dashboard from './components/dashboard/dashboard'

// import Register from './components/auth/register'
// import Login from './components/auth/login'


// import Footer from './components/common/footer'

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <NavbarMaster />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard}/>
          {/* <Route path="/login" component={Login}/> */}
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App