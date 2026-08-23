import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Layout from './Layout.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import { store } from './Redux/store.js'
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          }
        ]

        
      }

    ]
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
