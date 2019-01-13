import React from 'react'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('LoadingIcon')

// TODO cooler gif loader
const LoadingIcon = () => <div>{t('loading')}</div>

export default LoadingIcon
