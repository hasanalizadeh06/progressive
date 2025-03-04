import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

import logo from "../../assets/navbar/logo2.png"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink to="about-us">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="register">
        <NavLink to="register">
          REGISTER NOW
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar