import React from 'react'
import {Outlet} from 'react-router-dom'
export default function AuthLayout() {
  return (
    <div className='rounded-xl mx-auto my-10 px-4 py-10 max-w-xl shadow-xl'>
    <Outlet/>
    </div>
  )
}
