import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import nameContext from './Props/data.js'

createRoot(document.getElementById('root')).render(
  <nameContext.Provider value={"hello World"}>
    <App />
  </nameContext.Provider>
)
