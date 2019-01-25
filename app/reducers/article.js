export const LOAD_ARTICLE = 'LOAD_ARTICLE'
export const LOAD_ARTICLE_COMPLETE = 'LOAD_ARTICLE_COMPLETE'

export const loadArticle = (name, articles) => ({
  type: LOAD_ARTICLE,
  name,
  articles
})

export const loadArticleComplete = article => ({
  type: LOAD_ARTICLE_COMPLETE,
  article
})

const initialError = {
  code: '',
  message: '',
  values: []
}

const initialState = {
  loading: false,
  error: initialError,
  content: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLE: return { ...state, loading: true, content: '' }
    case LOAD_ARTICLE_COMPLETE: return { ...state, loading: false, content: action.article }
    default: return state
  }
}
