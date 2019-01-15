import { LOAD_ARTICLE, LOAD_ARTICLE_COMPLETE } from '../constants/actionTypes'

export const loadArticle = (name, articles) => ({
  type: LOAD_ARTICLE,
  name,
  articles
})

export const loadArticleComplete = article => ({
  type: LOAD_ARTICLE_COMPLETE,
  article
})
