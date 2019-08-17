import React from 'react'
import './index.scss'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('LoadingIcon')

// TODO cooler gif loader
const LoadingIcon = ({ show = false }) => !show ? null
  : <div className='gaming-loader-overlay'>
    <div className='text-center center-image-loader'>
      <img alt='kil-la-kil main character flying on back of another girl' src={require('../../../images/kilakil.gif')} />
      <div>{t('loading')}</div>
    </div>
  </div>

export default LoadingIcon
