import { createRoot } from 'react-dom/client'
import React from 'react'
import AppRoutes from './routes/AppRouter'
const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('root element not found')

const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
