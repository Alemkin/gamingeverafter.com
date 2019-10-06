import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Markdown from '../Markdown'
import NotFound from '../NotFound'
import LoadingIcon from '../LoadingIcon'
import articles from '../../../articles'

const findArticle = articleName => article => article.fileName === articleName

const Article = props => {
  useEffect(props.useLoadArticle(props), [])

  if (props.article === 'notfound') return <NotFound />
  const article = articles && articles.length && articles.find(findArticle(props.articleName))
  return (
    <main className='article'>
      <LoadingIcon show={props.loading} />
      <h1 className='mb-4'>{article && article.title}</h1>
      <Markdown source={props.article} />
    </main>
  )
}

Article.propTypes = {
  article: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Article
