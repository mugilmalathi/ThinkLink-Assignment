import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Customers from '../Pages/Customers'
import Inventory from '../Pages/Inventory'
import Orders from '../Pages/Orders'
import Reports from '../Pages/Reports'
import Settings from '../Pages/Settings'
import Sidebar from '../Sidebar/Sidebar'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    </div>
  )
}

export default AllRoutes