import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route, Link } from 'react-router-dom'
import Header from '../Header'
import ArticleList from '../ArticleList'
import Article from '../Article'
import NotFound from '../NotFound'
import './index.scss'

// TODO move out to own component, add arrows to links
const Menu = () =>
  <div className='menu p-2 m-4'>
    <Link to='/about'>{'About'}</Link>
    <Link to='/contact'>{'Contact'}</Link>
    <Link to='/games'>{'Games'}</Link>
    <Link to='/fight'>{'Fight'}</Link>
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
          <Route path='/' component={Menu} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Switch>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/article/:id' component={Article} />
            <Route path='' component={NotFound} />
          </Switch>
        </Col>
      </Row>
    </Container>
  </div>

export default App
