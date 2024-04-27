import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import { router } from './routes/Routes.jsx'
import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
    </AuthProvider>
   
  </React.StrictMode>,
)
