import * as React from 'react'
import { NavLink } from 'react-router-dom'
import Routes from 'utils/Routes'

const Navbar = () => (
  <div className="navbar">
    <NavLink to={Routes.primary.home.path}>home</NavLink>
    <NavLink to={Routes.primary.about.path}>about</NavLink>
  </div>
)

export default Navbar
