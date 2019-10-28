import React from 'react'
import { translateComponent } from '../../utils/translate'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './index.scss'

const t = translateComponent('NotFound')

const NotFound = () =>
  <div className='text-center page-wrapper'>
    <h1>{t('notfound')}</h1>
    <img alt='Alex dressed as Ash from Pokemon, tossing a pokeball up and down with a vulpix by his legs' className='img-fluid not-found-image' src={require('../../../images/poke_x3.gif')} />
    <Link className='d-block not-found-link' to='/'><h5>{t('return')}</h5></Link>
  </div>

export default withRouter(NotFound)
