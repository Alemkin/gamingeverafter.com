import { GET_ARTICLES } from '../constants/serviceTypes'
import { actionTypes as asyncTypes, isAsyncOperation, isAsyncComplete, isAsyncFailure } from 'async-ops'

const initialError = {
  code: '',
  message: '',
  values: []
}

const initialState = {
  loading: false,
  error: initialError,
  list: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case asyncTypes.OPERATION:
    case asyncTypes.COMPLETE:
    case asyncTypes.FAILURE:
      if (isAsyncOperation(GET_ARTICLES)(action)) return getArticles(state, action)
      if (isAsyncComplete(GET_ARTICLES)(action)) return getArticlesResult(state, action)
      if (isAsyncFailure(GET_ARTICLES)(action)) return getArticlesError(state, action)
      return state
    default: return state
  }
}

const getArticles = (state, action) => ({
  ...state,
  loading: true
})

const getArticlesResult = (state, action) => ({
  ...state,
  loading: false,
  list: action.response || []
})

const getArticlesError = (state, action) => ({
  ...state,
  loading: false,
  error: action.error
})
