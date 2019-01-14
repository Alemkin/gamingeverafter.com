import React from 'react'
import { translateComponent } from '../../utils/translate'
import './index.scss'

const t = translateComponent('Header')

const Header = () =>
  <div className='header mb-5 align-items-center'>
    <img alt='8 bit Liara from Mass Effect' className='header-image-before mr-4' src={require('../../images/tali.png')} />
    <h2 title={t('title')} className='header-title'>{t('title')}</h2>
    <img alt='8 bit Liara from Mass Effect' className='header-image-after ml-4' src={require('../../images/liara.png')} />
  </div>

export default Header
