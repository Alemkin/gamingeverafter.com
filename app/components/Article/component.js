import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Markdown from '../Markdown'
import NotFound from '../NotFound'
import LoadingIcon from '../LoadingIcon'
import articles from '../../../articles'
import './index.scss'

const findArticle = articleName => article => article.fileName === articleName

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const Article = props => {
  useEffect(props.useLoadArticle(props), [])

  if (props.article === 'notfound') return <NotFound />
  const article = articles && articles.length && articles.find(findArticle(props.articleName))
  return (
    <main className='article'>
      <LoadingIcon show={props.loading} />
      {props.article && <h1 className='mb-4 article-title'>{article && article.title}</h1>}
      <Markdown source={props.article} />
      {props.article && <i title='Back To Top' onClick={backToTop} className='back-to-top-link far fa-arrow-alt-circle-up' />}
    </main>
  )
}

Article.propTypes = {
  article: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Article
