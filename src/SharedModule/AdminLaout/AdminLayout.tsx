import React from 'react'
import SidBar from '../../AdminModule/Components/SidBar/SidBar'
import NavBar from '../../AdminModule/Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
    <div className="d-flex">
        <div>
          <SidBar/>
        </div>
        <div className="m-3 w-100">
          <NavBar/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}
