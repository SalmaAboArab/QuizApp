import { useState } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from './SharedModule/AuthLayout/AuthLayout'
import NotFound from './SharedModule/NotFound/NotFound'
import Login from './AuthModule/Login/Login'
import Register from './AuthModule/Register/Register'
import ForgetPassword from './AuthModule/ForgetPassword/ForgetPassword'
import ResetPassword from './AuthModule/ResetPassword/ResetPassword'
import ProtectedRout from './SharedModule/ProtectedRout/ProtectedRout'
import AdminLayout from './SharedModule/AdminLaout/AdminLayout'
import Home from './AdminModule/Components/Home/Home'
import ChangePassword from './AuthModule/ChangePassword/ChangePassword'

function App() {
  const routers = createBrowserRouter([

    {
      path:"authentication",
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
      path:'admin',
      element:(
        <AdminLayout/>
      ),
      errorElement:<NotFound/>,
      children:
      [
        {index:true,element:<Home/>},
       
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
