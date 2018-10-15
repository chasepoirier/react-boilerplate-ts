import { Navbar } from 'components'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './About'
import Home from './Home'

import Routes from '../utils/Routes'

const App = () => (
  <section>
    <Navbar />
    <section>
      <Switch>
        <Route exact={true} path={Routes.primary.home.path} component={Home} />
        <Route
          exact={true}
          path={Routes.primary.about.path}
          component={About}
        />
      </Switch>
    </section>
  </section>
)

export default App
