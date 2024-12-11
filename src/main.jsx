import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './Layout';
import Lessons from './components/Lessons/Lessons';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: " page not found",
    children: [
      {
        path: "/",
        element: <Lessons />
      },
      {
        path: "/lessons",
        element: <Lessons />
      },
      {
        path: "/tutorials",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
