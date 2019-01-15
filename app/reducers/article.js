import { LOAD_ARTICLE, LOAD_ARTICLE_COMPLETE } from '../constants/actionTypes'

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
