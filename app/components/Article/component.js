import React from 'react'
import PropTypes from 'prop-types'
import Markdown from '../Markdown'
import NotFound from '../NotFound'
import LoadingIcon from '../LoadingIcon'
import './index.scss'

// TODO show not found if no article
const Article = ({ article }) => {
  if (article === 'notfound') return <NotFound />
  if (article === 'loading') return <LoadingIcon />
  return (
    <div className='article'>
      <Markdown source={article} />
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.string.isRequired
}

export default Article
