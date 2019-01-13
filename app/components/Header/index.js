import React from 'react'
import { Row, Col } from 'reactstrap'
import { translateComponent } from '../../utils/translate'
import './index.scss'

const t = translateComponent('Header')

const Header = () =>
  <Row className='header mb-5'>
    <Col>
      <img className='header-image d-inline mr-4' src={require('../../images/vulpix.gif')} />
      <h2 className='d-inline'>{t('title')}</h2>
    </Col>
  </Row>

export default Header
