import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'app/Home'
import Events from 'app/Events'

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/events' component={Events} />
  </Switch>
)

export default Router
