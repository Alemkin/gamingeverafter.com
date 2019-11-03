import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './index.scss'

const Header = () =>
  <Link className='header' to='/'>
    <img alt='Ellen and Alex playing and 8-bit version of a vacuum tube tv, with the words "Gaming Ever After" on screen' className='header-banner' src={require('../../../images/banner_tv.png')} />
    <img alt='A logo in the shape of a controller that says "Gaming Ever After' className='header-banner-mobile' src={require('../../../images/banner_whitelogo.png')} />
  </Link>

export default withRouter(Header)
