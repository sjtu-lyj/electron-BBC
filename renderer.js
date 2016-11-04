// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
import store from './src/js/store'
import Layout from './src/js/components/layout'
import {Provider} from 'react-redux'

//comment is
ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  document.getElementById('app')
)
