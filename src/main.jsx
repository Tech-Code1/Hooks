import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import '../src/07-useReducer/intro-reducer'
import { MainApp } from './08-useContext/MainApp'
import { AboutPage } from './08-useContext/AboutPage';
import { HomePage } from './08-useContext/HomePage';
import { LoginPage } from './08-useContext/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path:"*",
        element: <Navigate to="/" replace />
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
