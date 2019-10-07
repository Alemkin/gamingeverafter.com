import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import ArticleList from '../ArticleList'
import Article from '../Article'
import About from '../About'
import Contact from '../Contact'
import Games from '../Games'
import Fight from '../Fight'
import NotFound from '../NotFound'
import Menu from '../Menu'
import './index.scss'

const App = () =>
  <div className='gaming-main'>
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
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/games' component={Games} />
            <Route exact path='/fight' component={Fight} />
            <Route path='' component={NotFound} />
          </Switch>
        </Col>
      </Row>
    </Container>
  </div>

export default App
