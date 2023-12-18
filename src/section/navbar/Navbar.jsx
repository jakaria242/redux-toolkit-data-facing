import React from 'react'
import '../navbar/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="menu">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="userinfo">UserInfo</NavLink>
                    </li>
                    <li>
                        <NavLink to="photos">Photos</NavLink>
                    </li>
                    <li>
                        <NavLink to="signin">Sign In</NavLink>
                    </li>
                    <li>
                        <NavLink to="logininfo">Login Info</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar