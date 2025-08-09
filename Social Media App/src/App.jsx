import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { path } from 'framer-motion/client'
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'
import FeedPage from './pages/FeedPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import PostDetailsPage from './pages/PostDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
const router = createBrowserRouter([
  {
    path: '', element: <AuthLayout/>, children:[
      {path: 'login', element: <LoginPage/>},
      {path: 'register', element: <RegisterPage/>},
    
    ]
  },
  {
    path: '/', element: <MainLayout/>,children:[
      {index: true, element: <FeedPage/>},
      {path: 'post-details', element: <PostDetailsPage/>},
      {path: 'profile', element: <ProfilePage/>},
      {path: '*', element: <NotFoundPage/>}
    ]
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
