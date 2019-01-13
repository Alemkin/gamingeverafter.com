import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ArticlePreview = ({ title, text }) =>
  <div className='article-preview p-4'>
    <h3>{title}</h3>
    <p>{text}</p>
    <div className='arrow' />
  </div>

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ArticlePreview
