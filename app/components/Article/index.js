import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { get } from 'lodash'
import { loadArticle, clearArticle } from '../../reducers/article'
import Article from './component'

const importAll = r => r.keys().map(r)
const markdownFiles = importAll(require.context('../../../articles', false, /\.md$/))

const getArticleName = props => get(props, 'match.params.id')

const loadArticleAsync = props => () => {
  props.loadArticle(props.articleName, markdownFiles)

  return () => props.clearArticle()
}

const mapStateToProps = (state, props) => ({
  articleName: getArticleName(props),
  loading: state.article.loading,
  article: state.article.content,
  useLoadArticle: loadArticleAsync
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadArticle,
  clearArticle
}, dispatch)

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(Article)
