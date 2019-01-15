import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'
import { loadArticle } from '../../actions/article'
import Article from './component'

const importAll = (r) => r.keys().map(r)
const markdownFiles = importAll(require.context('../../../articles', false, /\.md$/))

const getArticleName = props => get(props, 'match.params.id')

const mapStateToProps = (state, props) => ({
  articleName: getArticleName(props),
  loading: state.article.loading,
  article: state.article.content
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadArticle
}, dispatch)

const lifecycleMethods = {
  componentWillMount () {
    this.props.loadArticle(this.props.articleName, markdownFiles)
  }
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleMethods)
)

export default enhance(Article)
