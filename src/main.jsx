import React from 'react'
import ReactDOM from 'react-dom/client'
import { FrontendMentorGalleryApp } from './FrontendMentorGalleryApp.jsx'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <FrontendMentorGalleryApp />
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)
