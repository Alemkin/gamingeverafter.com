import { takeEvery, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { sagaMiddleware } from '../store/middleware'
import { LOAD_ARTICLE } from '../constants/actionTypes'
import { loadArticleComplete } from '../actions/article'

export default function * loadArticle () {
  yield takeEvery(LOAD_ARTICLE, work)
}

const markdownFileMatches = articleName => m => m.includes(articleName)

export function * work (action) {
  const filterMd = action.articles.filter(markdownFileMatches(action.name))
  if (!filterMd[0]) {
    yield put(loadArticleComplete('notfound'))
    return
  }
  const res = yield window.fetch(filterMd[0])
  const article = yield res.text()

  // TODO remove delay, just for loaidng fun right now
  yield delay(1000)
  yield put(loadArticleComplete(article))
}

sagaMiddleware.run(loadArticle)
