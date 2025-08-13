import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'
import FeedPage from './pages/FeedPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import PostDetailsPage from './pages/PostDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoute from './protectedRoutes/ProtectedRoute'
import ProtectedAuthRoute from './protectedRoutes/ProtectedAuthRoute'
const router = createBrowserRouter([
  {
    path: '', element: <AuthLayout/>, children:[
      {path: 'login', element:<ProtectedAuthRoute><LoginPage/></ProtectedAuthRoute> },
      {path: 'register', element:<ProtectedAuthRoute><RegisterPage/></ProtectedAuthRoute> },
    
    ]
  },
  {
    path: '/', element: <MainLayout/>,children:[
      {index: true, element:<ProtectedRoute><FeedPage/></ProtectedRoute>},
      {path: 'post-details', element: <ProtectedRoute><PostDetailsPage/></ProtectedRoute> },
      {path: 'profile', element:<ProtectedRoute><ProfilePage/></ProtectedRoute>},
      {path: '*', element: <NotFoundPage/>}
    ]
  }
])


function App() {

  return (
    <>
    {<RouterProvider router={router}/>}
    </>
  )
}

export default App
