import React from 'react'
import "./Sidebar.scss"

import { BiLaptop } from "react-icons/bi";
import orders from "../Assets/Svg/orders.svg"
import inventory from "../Assets/Svg/inventory.svg"
import customers from "../Assets/Svg/customers.svg"
import reports from "../Assets/Svg/reports.svg"
import settings from "../Assets/Svg/settings.svg"
import { useState } from 'react';

const Sidebar = () => {

  const [textcolor, setTextcolor] = useState(null);

  const handleInventory =()=>{
    setTextcolor(!textcolor)
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-nav'>
          <div className='dashboard' style={{background: textcolor ? "#F7F1F3" : "#FFFFFF", borderRight:`5px solid ${textcolor ? "#811434" : "#FFFFFF"}`}} onClick={handleInventory}>
            <div><BiLaptop style={{color: textcolor ? "#811434" : "#485572"}}/></div>
            <div style={{color: textcolor ? "#811434" : "#485572"}}>Dashboard</div>
          </div>
          <div className='inventory'>
            <div><img src={inventory} alt="" /></div>
            <div>Inventory</div>
          </div>
          <div  className='orders'>
            <div><img src={orders} alt="" /></div>
            <div>Orders</div>
          </div>
          <div  className='customers'>
            <div><img src={customers} alt="" /></div>
            <div>Customers</div>
          </div>
          <div  className='reports'>
            <div><img src={reports} alt="" /></div>
            <div>Reports</div>
          </div>
          <div  className='settings'>
            <div><img src={settings} alt="" /></div>
            <div>Settings</div>
          </div>
      </div>
      <div className='sidebar-footer'>
        <div className='cork'>CorkOwl</div>
        <div className='copyright'>© 2020 CorkOwl, All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Sidebar