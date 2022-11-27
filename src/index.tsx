import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from 'src/App'
import reportWebVitals from 'src/reportWebVitals'
import 'src/utils/global.css'
import theme from 'src/utils/theme'
import { Provider } from 'react-redux'
import { reducer } from 'src/store'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={reducer}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
