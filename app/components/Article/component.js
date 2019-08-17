import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Markdown from '../Markdown'
import NotFound from '../NotFound'
import LoadingIcon from '../LoadingIcon'

const Article = props => {
  useEffect(props.useLoadArticle(props), [])

  if (props.article === 'notfound') return <NotFound />

  return (
    <main className='article'>
      <LoadingIcon show={props.loading} />
      <Markdown source={props.article} />
    </main>
  )
}

Article.propTypes = {
  article: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Article
