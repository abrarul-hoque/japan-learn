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
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import ErrorPage from './components/ErrorPage';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import LessonDetails from './components/shared/LessonDetails';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        path: "/lesson/:id",
        element: <LessonDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/lesson/${params.id}`)
      },
      {
        path: "/tutorials",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
