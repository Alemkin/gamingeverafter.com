import React from 'react'
import { translateComponent } from '../../utils/translate'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './index.scss'

const t = translateComponent('Header')

const Header = () =>
  <div className='header align-items-center'>
    <img alt='8 bit Tali from Mass Effect' className='header-image-before mr-4' src={require('../../../images/tali.png')} />
    <Link to='/'><h1 title={t('title')} className='header-title'>{t('title')}</h1></Link>
    <img alt='8 bit Liara from Mass Effect' className='header-image-after ml-4' src={require('../../../images/liara.png')} />
  </div>

export default withRouter(Header)
