import React from 'react'
import { translateComponent } from '../../utils/translate'
import './index.scss'

const t = translateComponent('Header')

const Header = () =>
  <div className='header mb-5'>
    <img className='header-image mr-4' src={require('../../images/vulpix.gif')} />
    <h2 className='header-title'>{t('title')}</h2>
  </div>

export default Header
