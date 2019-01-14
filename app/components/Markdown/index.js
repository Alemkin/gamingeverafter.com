import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

const MarkdownWrapper = ({ source }) => {
  if (!source) return null
  return <Markdown source={source} />
}

MarkdownWrapper.propTypes = {
  source: PropTypes.string.isRequired
}

export default MarkdownWrapper
