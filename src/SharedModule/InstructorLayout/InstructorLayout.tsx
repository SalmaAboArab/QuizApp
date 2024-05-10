import React from 'react'
import SidBar from '../../AdminModule/Components/SidBar/SidBar'
import NavBar from '../../AdminModule/Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function InstructorLayout() {
  return (
    <>
    <div className="w-full flex">
        <div className='w-1/6'>
          <SidBar/>
        </div>
        <div className=" w-full ">
          <NavBar/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}
