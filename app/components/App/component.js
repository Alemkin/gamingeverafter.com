import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import ArticleList from '../ArticleList'
import Article from '../Article'
import NotFound from '../NotFound'
import Menu from '../Menu'
import './index.scss'

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
