// base
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

// components
import App from './components/App/index'
import FontLoader from './components/FontLoader'

// styles
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <FontLoader fontFamily="Prompt" />
    <Router>
      <App />
    </Router>
  </>
)
