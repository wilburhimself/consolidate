import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'app/Home'
import Events from 'app/Events'
import Stores from 'app/Stores'

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/events' component={Events} />
    <Route exact path='/stores' component={Stores} />
  </Switch>
)

export default Router
