import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './utils/global.css'
import theme from './utils/theme'
// import { Provider } from 'react-redux'
// import store from './store'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  // <Provider store={store}>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
  // </Provider>
)

reportWebVitals()
