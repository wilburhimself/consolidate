import React from 'react'
import PropTypes from 'prop-types'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Router from './layout/Router'

const Layout = ({children}) => (
  <Site>
    <Header />
    <Content>
      <Router />
    </Content>
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
