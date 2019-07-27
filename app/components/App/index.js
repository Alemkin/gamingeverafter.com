import { compose } from 'redux'
import { withRouter } from 'react-router'
import App from './component'

const enhance = compose(
  withRouter
)

export default enhance(App)
