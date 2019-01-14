import React from 'react'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('LoadingIcon')

// TODO cooler gif loader
const LoadingIcon = () =>
  <div className='text-center'>
    <img alt='kil-la-kil main character flying on back of another girl' src={require('../../../images/kilakil.gif')} />
    <div>{t('loading')}</div>
  </div>

export default LoadingIcon
