import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from 'utils/registerServiceWorker.js'

import store from 'modules/store'
import App from 'views/App'

import './index.css'

/* eslint-disable react/jsx-filename-extension */
const Index = () => (
  <Router>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>
)
/* eslint-enable react/jsx-filename-extension */

ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
