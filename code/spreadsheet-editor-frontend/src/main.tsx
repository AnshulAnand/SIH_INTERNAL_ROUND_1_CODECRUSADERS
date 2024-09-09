import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { registerLicense } from '@syncfusion/ej2-base'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.tsx'
import SpreadsheetEditor from './SpreadsheetEditor.tsx'
import Signup from './Signup.tsx'
import Dashboard from './Dashboard.tsx'

registerLicense(import.meta.env.VITE_LICENSE_KEY)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/file/:id',
    element: <SpreadsheetEditor />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },

  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
