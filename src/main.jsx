import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { $ } from './utils/dom'
// import { store } from '../app/store'
// import { Provider } from 'react-redux'

ReactDOM.createRoot($('#root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
)
