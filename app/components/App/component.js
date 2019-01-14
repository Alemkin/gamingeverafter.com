import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route, Link } from 'react-router-dom'
import { translateComponent } from '../../utils/translate'
import Header from '../Header'
import ArticleList from '../ArticleList'
import './index.scss'

const t = translateComponent('App')

const NotFound = () =>
  <div className='text-center'>
    <h1>{t('notfound')}</h1>
    <img alt='8 bit Ash and Pikachu Walking' title='Ash and Pikachu Walking' className='img-fluid not-found-image' src={require('../../images/pikaash.gif')} />
    <Link className='d-block not-found-link' to='/'><h5>{t('return')}</h5></Link>
  </div>

const App = () =>
  <div className='poke-main'>
    <Container fluid>
      <Row>
        <Col>
          <Route path='/' component={Header} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Switch>
            <Route exact path='/' component={ArticleList} />
            <Route path='' component={NotFound} />
          </Switch>
        </Col>
      </Row>
    </Container>
  </div>

export default App
