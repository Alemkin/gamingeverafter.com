
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Article from './component'
import { loadArticle, clearArticle, selectArticle } from '../../reducers/article'

const importAll = r => r.keys().map(r)
const markdownFiles = importAll(require.context('../../../articles', false, /\.md$/))

const scroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
  const elements = document.getElementsByClassName('progress-bar')
  const el = elements && elements.length && elements[0]
  if (!el) return
  el.style.width = scrolled + '%'
}

const ArticleContainer = () => {
  const dispatch = useDispatch()
  const article = useSelector(selectArticle)
  const { id } = useParams()

  useEffect(() => {
    dispatch(loadArticle(id, markdownFiles))

    return () => dispatch(clearArticle())
  }, [id])

  useEffect(() => {
    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  })

  return (
    <Article loading={article.loading} article={article.content} articleName={id} />
  )
}

export default ArticleContainer
