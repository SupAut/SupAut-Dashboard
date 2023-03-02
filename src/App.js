import React, { Component, Suspense } from 'react'
//import { HashRouter, Routes } from 'react-router-dom'
import './scss/style.scss'
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom'
import StudentList from './components/StudentList'
import StudentPage from './components/StudentPage'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Suspense fallback={loading}>
            <Router>
              <Route path="/" name="Home" element={<DefaultLayout />} />
              <Route exact path="/" component={StudentList} />
              <Route path="/student/:id" component={StudentPage} />
            </Router>
          </Suspense>
        </Switch>
      </HashRouter>
    )
  }
}

export default App
