import React from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from '../ArticlePreview'
import articles from '../../../articles'
import './index.scss'

const ImageAfter = ({ a }) =>
  <>
    <div className='d-inline mb-5 mr-2'>
      <ArticlePreview title={a.title} text={a.text} fileName={a.fileName} />
    </div>
    <div className='d-inline'>
      <img alt='8 bit male character with sword, black hair, and a white scarf' src={require('../../../images/c1.gif')} />
    </div>
  </>

const ImageBefore = ({ a }) =>
  <>
    <div className='d-inline'>
      <img alt='8 bit female character with purple hair and a red vest' src={require('../../../images/c2.gif')} />
    </div>
    <div className='d-inline mb-5 ml-2'>
      <ArticlePreview title={a.title} text={a.text} fileName={a.fileName} />
    </div>
  </>

const mapArticle = (a, i) =>
  <div id={a.fileName} key={i} className='d-flex justify-content-center align-items-center'>
    {i % 2 === 0 ? <ImageAfter a={a} /> : <ImageBefore a={a} />}
  </div>

const ArticleList = () =>
  <main className='article-list'>
    {articles.map(mapArticle)}
  </main>

ArticleList.propTypes = {
  articles: PropTypes.array
}

export default ArticleList
