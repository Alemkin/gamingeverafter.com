import React from 'react'
import PropTypes from 'prop-types'
import Markdown from '../Markdown'
import NotFound from '../NotFound'
import LoadingIcon from '../LoadingIcon'
import articles from '../../../articles'
import { onEnterKeyPress } from '../../utils/keyPress'
import './index.scss'

const findArticle = articleName => article => article.fileName === articleName

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const Article = props => {
  if (props.article === 'notfound') return <NotFound />
  const article = articles && articles.length && articles.find(findArticle(props.articleName))
  return (
    <main className='article'>
      {props.loading && <LoadingIcon show={props.loading} />}
      {props.article && <h1 className='mb-4 article-title'>{article && article.title}</h1>}
      <Markdown source={props.article} />
      {props.article && <i title='Back To Top' tabIndex={0} role='link' onKeyUp={onEnterKeyPress(backToTop)} onClick={backToTop} className='back-to-top-link far fa-arrow-alt-circle-up' />}
      {props.article && <div className='progress-bar' />}
    </main>
  )
}

Article.propTypes = {
  article: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Article
