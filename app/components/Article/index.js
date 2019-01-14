import { compose, lifecycle, withState } from 'recompose'
import { connect } from 'react-redux'
import { get } from 'lodash'
import Article from './component'

const importAll = (r) => r.keys().map(r)
const markdownFiles = importAll(require.context('../../../articles', false, /\.md$/))

const getArticleName = props => get(props, 'match.params.id')

const mapStateToProps = (state, props) => ({
  articleName: getArticleName(props)
})

const markdownFileMatches = articleName => m => m.includes(articleName)
const lifecycleMethods = {
  async componentWillMount () {
    const filterMd = markdownFiles.filter(markdownFileMatches(this.props.articleName))
    if (!filterMd[0]) {
      this.props.setArticle('notfound')
      return
    }
    const article = await window.fetch(filterMd[0]).then((res) => res.text())
    this.props.setArticle(article)
  }
}

const enhance = compose(
  connect(mapStateToProps, null),
  withState('article', 'setArticle', 'loading'),
  lifecycle(lifecycleMethods)
)

export default enhance(Article)
