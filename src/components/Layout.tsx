import React, {memo} from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = memo(function () {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
        <Outlet/>

        </div>
      </div>
    </div>
  )
})

export default Layout