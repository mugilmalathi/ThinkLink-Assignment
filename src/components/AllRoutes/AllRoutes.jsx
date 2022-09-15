import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default AllRoutes