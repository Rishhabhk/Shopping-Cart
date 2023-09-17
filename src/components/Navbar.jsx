import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to='/'>
            <img src="https://t4.ftcdn.net/jpg/03/34/53/51/360_F_334535136_vvbWaKEpsHIMS4dpJUxgXZL6clQX7VGs.jpg" width='100' height='50' alt="" />
        </NavLink>
        <div className='navitem_div'>
            <NavLink to='/'>
                <span className='homebtn'>Home</span>
            </NavLink>
            <NavLink to='/cart'>
                <span className='nav_cartbtn'><AiOutlineShoppingCart/></span>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar