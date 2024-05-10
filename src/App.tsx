import { useState } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from './SharedModule/AuthLayout/AuthLayout'
import NotFound from './SharedModule/NotFound/NotFound'
import Login from './AuthModule/Login/Login'
import Register from './AuthModule/Register/Register'
import ForgetPassword from './AuthModule/ForgetPassword/ForgetPassword'
import ResetPassword from './AuthModule/ResetPassword/ResetPassword'
import ProtectedRoute from './SharedModule/ProtectedRoute/ProtectedRoute'
import Home from './AdminModule/Components/Home/Home'
import ChangePassword from './AuthModule/ChangePassword/ChangePassword'
import InstructorLayout from './SharedModule/InstructorLayout/InstructorLayout'
import Quizzes from './InstructorModule/Components/Quizzes/Quizzes'

function App() {
  const routers = createBrowserRouter([

    {
      path:"/",
      element:<AuthLayout/>,
      errorElement:<NotFound/>,
      children:
      [
        {index:true,element:<Login/>},
        {path:"register",element:<Register/>},
        {path:"forgot-password",element:<ForgetPassword/>},
        {path:"reset-password",element:<ResetPassword/>},
        {path:"change-Password",element:<ChangePassword/>}
       
      ]
    },
    {
      path:'instructor',
      element:(
        <InstructorLayout/>
      ),
      errorElement:<NotFound/>,
      children:
      [
        {index:true,element:<Home/>},
        {path:"quizzes",element:<Quizzes/>}
       
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={routers} />
    </>
  )
}

export default App
