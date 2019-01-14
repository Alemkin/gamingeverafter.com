import React from 'react'
import { translateComponent } from '../../utils/translate'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './index.scss'

const t = translateComponent('NotFound')

const NotFound = () =>
  <div className='text-center'>
    <h1>{t('notfound')}</h1>
    <img alt='8 bit Ash and Pikachu Walking' title='Ash and Pikachu Walking' className='img-fluid not-found-image' src={require('../../../images/pikaash.gif')} />
    <Link className='d-block not-found-link' to='/'><h5>{t('return')}</h5></Link>
  </div>

export default withRouter(NotFound)
