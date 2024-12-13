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
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AdminLayout from './components/AdminLayout';
import AddLesson from './components/AdminDashboard/AddLesson';
import AdminHome from './components/AdminDashboard/AdminHome';
import Lesson from './components/AdminDashboard/Lesson';
import ManageUsers from './components/AdminDashboard/ManageUsers';
import LessonManagement from './components/AdminDashboard/LessonManagement';
import VocabularyManagement from './components/AdminDashboard/VocabularyManagement';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Lessons /></PrivateRoute>
      },
      {
        path: "/lessons",
        element: <PrivateRoute><Lessons /></PrivateRoute>
      },
      {
        path: "/lesson/:id",
        element: <PrivateRoute><LessonDetails /></PrivateRoute>,
        loader: async ({ params }) => {
          const token = localStorage.getItem("access-token");
          const response = await fetch(`https://japan-learn-server.vercel.app/lesson/${params.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Unauthorized access");
          }

          return response.json();
        }
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
  {
    path: "/dashboard",
    element: <AdminDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "lesson",
        element: <Lesson />,
      },
      {
        path: "add-lesson",
        element: <AddLesson />,
      },
      {
        path: "add-vocabulary",
        element: <AddLesson />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "lesson-management",
        element: <LessonManagement />,
      },
      {
        path: "vocabulary-management",
        element: <VocabularyManagement />,
      },
    ]
  }
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
