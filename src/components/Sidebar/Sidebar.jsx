import React from 'react'
import "./Sidebar.scss"
import "../Responsive/responsive.scss"

import { BiLaptop } from "react-icons/bi";
import orders from "../Assets/Svg/orders.svg"
import inventory from "../Assets/Svg/inventory.svg"
import customers from "../Assets/Svg/customers.svg"
import reports from "../Assets/Svg/reports.svg"
import settings from "../Assets/Svg/settings.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const [textcolor, setTextcolor] = useState(true);
  const [collapse, setCollapse] = useState(false);


  const handleInventory =()=>{
    setTextcolor(!textcolor)
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-nav'>
          <div className='dashboard' style={{background: textcolor ? "#F7F1F3" : "#FFFFFF", borderRight:`5px solid ${textcolor ? "#811434" : "#FFFFFF"}`}} onClick={handleInventory}>
            <div><BiLaptop style={{color: textcolor ? "#811434" : "#485572"}}/></div>
            <div style={{color: textcolor ? "#811434" : "#485572"}}><Link to="/dashboard">Dashboard</Link></div>
          </div>
          <div className='inventory'>
            <div><img src={inventory} alt="" /></div>
            <div><Link to="/inventory">Inventory</Link></div>
          </div>
          <div  className='orders'>
            <div><img src={orders} alt="" /></div>
            <div><Link to="/orders">Orders</Link></div>
          </div>
          <div  className='customers'>
            <div><img src={customers} alt="" /></div>
            <div><Link to="/customers">Customers</Link></div>
          </div>
          <div  className='reports'>
            <div><img src={reports} alt="" /></div>
            <div><Link to="/reports">Reports</Link></div>
          </div>
          <div  className='settings'>
            <div><img src={settings} alt="" /></div>
            <div><Link to="/settings">Settings</Link></div>
          </div>
      </div>
      <div className='sidebar-footer'>
        <div className='cork'>CorkOwl</div>
        <div className='copyright'>© 2020 CorkOwl, All Rights Reserved.</div>
        <div className="collapseButton" onClick={(e) => setCollapse(!collapse)}> - </div>
      </div>
      
    </div>
  )
}

export default Sidebar