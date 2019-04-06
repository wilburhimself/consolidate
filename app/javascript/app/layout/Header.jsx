import React from 'react'
import styled from 'styled-components'
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarLink,
  NavbarDropdown } from 'bulma-styled-components'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <Navbar role="navigation" aria-label="main navigation">
        <NavbarBrand>
          <NavbarItem>
            <Link to="/">Consolidate</Link>
          </NavbarItem>
        </NavbarBrand>

        <NavbarMenu>
          <NavbarStart>
            <NavbarItem>
              <Link to='/'>Home</Link>
            </NavbarItem>

            <NavbarItem>
              <Link to='/events'>Events</Link>
            </NavbarItem>
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Header
