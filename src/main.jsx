import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'

import Router from './Layout/MainLayout'
import AuthProvider from './Auth/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<QueryClientProvider client={queryClient}>
<HelmetProvider>

<AuthProvider>
 <RouterProvider router={Router} />
</AuthProvider>
    </HelmetProvider>
</QueryClientProvider>

  </React.StrictMode>,
)
