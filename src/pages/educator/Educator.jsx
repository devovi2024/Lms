import React from 'react'
import { Outlet } from 'react-router-dom'

const Educator = () => {
  return (
    <div>
      <h2>Educator Panel</h2>
      <Outlet />
    </div>
  )
}

export default Educator
