import React from 'react'
import PropTypes from 'prop-types'
import Markdown from '../Markdown'
import NotFound from '../NotFound'
import LoadingIcon from '../LoadingIcon'
import './index.scss'

const Article = ({ article, loading }) => {
  if (article === 'notfound') return <NotFound />
  if (loading) return <LoadingIcon />
  return (
    <main className='article'>
      <Markdown source={article} />
    </main>
  )
}

Article.propTypes = {
  article: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Article
