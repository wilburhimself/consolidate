// app/javascript/quotes/components/App.jsx
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ViewPort from 'dashboard/ViewPort'

const App = (props) => (
  <Router>
    <div>
      <Route
        path='/'
        component={ViewPort}
      />
    </div>
  </Router>
)

export default App
