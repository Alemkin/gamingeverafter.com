import React from 'react'
import './index.scss'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('LoadingIcon')

const LoadingIcon = ({ show = false }) => !show ? null
  : <div className='gaming-loader-overlay'>
    <div className='text-center center-image-loader'>
      <img alt='A heart is sliced and explodes as a loading animation' src={require('../../../images/heartloader.gif')} />
      <div>{t('loading')}</div>
    </div>
  </div>

export default LoadingIcon
