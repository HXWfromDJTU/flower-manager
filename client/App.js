import React from 'react'
import PrivateRoute from './components/privateRoute'
import { Route, Switch } from 'react-router-dom'
import Login from './view/Login'
import Index from './view/index'
import NotFound from './view/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/index' component={Index} />
        <Route path='/login' component={Login} />
        <Route path='*' component={NotFound} />
      </Switch>
    )
  }
}

export default App
