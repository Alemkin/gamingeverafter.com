import { sagaMiddleware } from '../store/middleware'
import { saga as asyncSaga } from 'async-ops'
import './loadArticle'

sagaMiddleware.run(asyncSaga)
