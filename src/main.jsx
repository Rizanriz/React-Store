import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import realStore from './Components/redux/realStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={realStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
