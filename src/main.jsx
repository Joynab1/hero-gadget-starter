import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Header/Home/Home'
import About from './Components/Header/About/About'
import Shop from './Components/Shop/Shop'
import ErrorPage from './Components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: 'shop',
        element: <Shop />,
        loader: ()=>fetch('products.json'),
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
