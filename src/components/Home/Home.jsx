import React from 'react'
import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./Home.scss"
import "../Responsive/responsive.scss"

import Overview from './Overview'
import OverviewCards from './OverviewCards'

const Home = () => {

  return (
    <div className='home'>
      <Sidebar />
      <div className='content'>
        <Overview />
        <OverviewCards />
      </div>
    </div>
  )
}

export default Home