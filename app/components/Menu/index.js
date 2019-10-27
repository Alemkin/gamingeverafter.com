import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './index.scss'

const MenuLink = ({ route, title, currentRoute }) =>
  <Link to={route} className={'menu-link' + (route === currentRoute ? ' selected' : '')} title={title}>
    <span className='arrow-menu' />
    <span className='title'>{title}</span>
  </Link>

const Menu = ({ location }) =>
  <nav className='menu'>
    <MenuLink currentRoute={location.pathname} route='/' title='Home' />
    <MenuLink currentRoute={location.pathname} route='/about' title='About' />
    <MenuLink currentRoute={location.pathname} route='/contact' title='Contact' />
    <MenuLink currentRoute={location.pathname} route='/games' title='Games' />
  </nav>

export default withRouter(Menu)
