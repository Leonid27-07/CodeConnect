import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Mentor from './views/mentor'
import Gitea from './views/gitea'
import Tg from './views/tg'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Mentor} exact path="/mentor" />
        <Route component={Gitea} exact path="/gitea" />
        <Route component={Tg} exact path="/tg" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
