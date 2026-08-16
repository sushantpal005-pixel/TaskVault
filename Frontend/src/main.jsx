import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Layout from './Layout.jsx'
import Dashboard from './Pages/DashBoard.jsx'
import { store } from './Redux/store.js'
import { Provider } from "react-redux";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      }

    ]
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
