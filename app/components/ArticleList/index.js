import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'reactstrap'
import ArticlePreview from '../ArticlePreview'
import articles from '../../../articles'
import './index.scss'

const ImageAfter = ({ a }) =>
  <>
    <div className='image-items-small-mobile'>
      <img className='chat-character-mobile' alt='Pixel version of Ellen in a wizard outfit holding a staff and playing with a fireball' src={require('../../../images/Wife_x2_2.gif')} />
    </div>
    <div className='image-items article-prev mt-4'>
      <ArticlePreview title={a.title} text={a.text} fileName={a.fileName} />
    </div>
    <div className='image-items image-right'>
      <img className='chat-character' alt='Pixel version of Ellen in a wizard outfit holding a staff and playing with a fireball' src={require('../../../images/Wife_x3_2.gif')} />
      <img className='chat-character-mobile' alt='Pixel version of Ellen in a wizard outfit holding a staff and playing with a fireball' src={require('../../../images/Wife_x2_2.gif')} />
    </div>
  </>

const ImageBefore = ({ a }) =>
  <>
    <div className='image-items'>
      <img className='chat-character' alt='Pixel version of Alex floating while holding a book and twirling a d20' src={require('../../../images/Nacho_x3_3.gif')} />
      <img className='chat-character-mobile' alt='Pixel version of Alex floating while holding a book and twirling a d20' src={require('../../../images/Nacho_x2_3.gif')} />
    </div>
    <div className='image-items mt-4 ml-2'>
      <ArticlePreview title={a.title} text={a.text} fileName={a.fileName} />
    </div>
  </>

const mapArticle = (a, i) =>
  <div id={a.fileName} key={i} className='article-image-combo justify-content-center align-items-center'>
    {i % 2 === 0 ? <ImageAfter a={a} /> : <ImageBefore a={a} />}
  </div>

const Pagination = ({ page, handleChangePage, totalPages }) => {
  const showPrevious = page < totalPages
  const showNext = page > 0
  return (
    <Row className='mt-4'>
      {showPrevious &&
        <Col className='mt-2' xs={{ size: 12, offset: 0 }} md={{ size: 3, offset: 1 }}>
          <Button title='Previous Page of Articles' type='button' onClick={handleChangePage(true)}>Previous Page</Button>
        </Col>}
      {showNext &&
        <Col className='mt-2' xs={{ size: 12, offset: 0 }} md={{ size: 3, offset: showPrevious ? 3 : 7 }}>
          <Button title='Next Page of Articles' type='button' onClick={handleChangePage(false)}>Next Page</Button>
        </Col>}
    </Row>
  )
}

const pageSize = 7
const ArticleList = () => {
  const [page, changePage] = useState(0)
  const articlesLength = (articles && articles.length) || 0
  const totalPages = Math.ceil(articlesLength / pageSize) - 1
  const handleChangePage = isNext => ev => isNext && page < totalPages ? changePage(page + 1)
    : !isNext && page > 0 ? changePage(page - 1) : console.log('You can not change the page this way')

  return (
    <main className='article-list'>
      {
        articles &&
        articles.length &&
        articles.slice(page * pageSize, (pageSize * page) + pageSize).map(mapArticle)
      }
      <Pagination page={page} handleChangePage={handleChangePage} totalPages={totalPages} />
    </main>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array
}

export default ArticleList
