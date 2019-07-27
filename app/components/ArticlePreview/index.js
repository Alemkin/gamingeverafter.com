import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './index.scss'

const ArticlePreview = ({ title, text, fileName }) =>
  <Link to={'/article/' + fileName} className='article-preview p-4 d-block' title={title}>
    <h4 className='preview-title'>{title}</h4>
    <p>{text}</p>
    <div className='arrow' />
  </Link>

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired
}

export default ArticlePreview
