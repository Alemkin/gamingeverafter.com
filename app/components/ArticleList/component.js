import React from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from '../ArticlePreview'
import { Row, Col } from 'reactstrap'

const ImageAfter = ({ a }) =>
  <>
    <Col className='mb-5' xs={9}>
      <ArticlePreview title={a.title} text={a.text} />
    </Col>
    <Col xs={3}>
      <img src={require('../../images/c1.gif')} />
    </Col>
  </>

const ImageBefore = ({ a }) =>
  <>
    <Col xs={3} md={3}>
      <img src={require('../../images/c2.gif')} />
    </Col>
    <Col className='mb-5' xs={9} md={9}>
      <ArticlePreview title={a.title} text={a.text} />
    </Col>
  </>

const mapArticles = (a, i) =>
  <Row key={i}>
    {i % 2 === 0 ? <ImageAfter a={a} /> : <ImageBefore a={a} />}
  </Row>

const ArticleList = ({ articles }) =>
  <>
    {articles.map(mapArticles)}
  </>

ArticleList.propTypes = {
  articles: PropTypes.array
}

export default ArticleList
