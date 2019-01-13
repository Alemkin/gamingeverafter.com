import React from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from '../ArticlePreview'

// TODO add image alt, desc, and titles
const ImageAfter = ({ a }) =>
  <>
    <div className='d-inline mb-5 mr-2'>
      <ArticlePreview title={a.title} text={a.text} fileName={a.fileName} />
    </div>
    <div className='d-inline'>
      <img src={require('../../images/c1.gif')} />
    </div>
  </>

const ImageBefore = ({ a }) =>
  <>
    <div className='d-inline'>
      <img src={require('../../images/c2.gif')} />
    </div>
    <div className='d-inline mb-5 ml-2'>
      <ArticlePreview title={a.title} text={a.text} fileName={a.fileName} />
    </div>
  </>

const mapArticles = (a, i) =>
  <div key={i} className='d-flex'>
    {i % 2 === 0 ? <ImageAfter a={a} /> : <ImageBefore a={a} />}
  </div>

const ArticleList = ({ articles }) => articles.map(mapArticles)

ArticleList.propTypes = {
  articles: PropTypes.array
}

export default ArticleList
