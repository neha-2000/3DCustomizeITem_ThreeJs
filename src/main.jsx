import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CouchContextProvider } from './3dStoreComponents/context/CouchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CouchContextProvider>
    <App />
    </CouchContextProvider>
 
  </React.StrictMode>,
)
