import React from 'react'
import "./Navbar.scss"
import "../Responsive/responsive.scss"

import logo from "../Assets/Svg/logo.svg"
import bell from "../Assets/Svg/bell.svg"
import account from "../Assets/Svg/account.svg"
import downarrow from "../Assets/Svg/downarrow.svg"

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='logo'>
        <img src={logo} alt={logo} />
      </div>

      <div className='searchbar'>
        <input className='search' type="text" placeholder='Search wines, customers here...'/>
      </div>

      <div className='account'>
        <div><img className='bell' src={bell} alt="" /></div>
        <div className='name'>Nicholas D.</div>
        <div>
          <img src={account} alt="" />
          <img className='downarrow' src={downarrow} alt="" />
        </div>
        
      </div>

    </div>
  )
}

export default Navbar