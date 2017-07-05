import "regenerator-runtime/runtime"
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'


const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>
  , document.getElementById('content'))
