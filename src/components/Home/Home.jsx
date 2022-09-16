import React from 'react'
import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./Home.scss"

const Home = () => {

  // const [slide, setSlide] = useState("80%")

  // const handleSlide = ()=>{
  //   setSlide("100%")
  // }

  return (
    <div className='home'>
      <Sidebar />
      {/* <div className='slide' onClick={handleSlide}></div> */}
      <div className='content'></div>
    </div>
  )
}

export default Home