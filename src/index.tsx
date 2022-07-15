import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './utils/global.css'
import { Provider } from 'react-redux'
import { reducer } from './store'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Provider store={reducer}>
    <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
