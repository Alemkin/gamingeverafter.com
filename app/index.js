import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { registerPlugin } from 'use-async-ops'
import { reduxPlugin } from 'use-async-ops-redux'

import store from './store'
import './service'
import './sagas'

import '../images/favicon.ico'
import '../fonts/DeterminationMonoWeb.woff'

import { initTranslator } from './utils/translate'

initTranslator()

registerPlugin(reduxPlugin(store.dispatch))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
