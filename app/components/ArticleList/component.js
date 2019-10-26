import React from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from '../ArticlePreview'
import articles from '../../../articles'
import './index.scss'

const ImageAfter = ({ a }) =>
  <>
    <div className='image-items-small-mobile'>
      <img className='chat-character-mobile' alt='Pixel version of Ellen in a wizard outfit holding a staff and playing with a fireball' src={require('../../../images/Wife_x2_2.gif')} />
    </div>
    <div className='image-items article-prev mb-5'>
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
    <div className='image-items mb-5 ml-2'>
      <ArticlePreview title={a.title} text={a.text} fileName={a.fileName} />
    </div>
  </>

const mapArticle = (a, i) =>
  <div id={a.fileName} key={i} className='article-image-combo justify-content-center align-items-center'>
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
