<<<<<<< HEAD
import React from 'react'

function Navbar() {
    return (
        <div>
            sjdnkhsdf
        </div>
    )
}

=======
import React from 'react';
import './navbar.css';
import callicon from '../../src/Assets/callicon.svg';
import navicon from "../../src/Assets/navlogo.svg"

const Navbar = () => {
  return (
    <>
    <div className="navbar-top">
       <img id="callogo" src={callicon}/>
       <p>+919822220005</p>
       <p id="offerline">Get 50% Off on Selected Items    |      Shop Now</p>
        </div>
        
    <div className="navbar-main">
      
        <div className="nav-logo">
        <img id="nav-icon" src={navicon}/>
        </div>
    <div className="navbar-items">
        <li>
          <select>
            <option>Category </option>
            <option>Dresses </option>
            <option>Shoes</option>
            <option>Books</option>
            <option>Mobiles</option>
          </select>
        </li>
        <li>Deals</li>
        <li>What's New</li>
        <li>Delivery</li>
        </div>
      
      </div>
      </>
    
    
   
  )
}
>>>>>>> 80c86c68ec6f4687e69db543833d080f82d0340b
export default Navbar
