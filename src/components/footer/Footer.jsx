// filepath: c:\Users\PC\Desktop\Code\progressive\src\components\footer\Footer.jsx
import React from 'react'
import "./Footer.css"
import logo from "../../assets/navbar/logo.png"
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMailOutline } from 'react-icons/io5'

function Footer() {
  return (
    <div className="footer">
        <div className="upper">
            <div className="left">
                <img src={logo} alt="" />
            </div>
            <div className="right">
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
        </div>
        <div className="lower">
            <div className="left">
                <div className="support">
                    <div className="header">
                        Support
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <NavLink to="help-center">
                                    Help Center
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="privacy-policy">
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="terms-conditions">
                                    Terms & Conditions
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact">
                    <div className="header">
                        Contact
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <a>
                                    <BsTelephone /> 051 555 55 55
                                </a>
                            </li>
                            <li>
                                <a>
                                    <HiOutlineLocationMarker /> Babek Plaza
                                </a>
                            </li>
                            <li>
                                <a>
                                    <IoMailOutline /> loremimpus@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <FaFacebookF />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaWhatsapp />
                    </li>
                    <li>
                        <FaTelegramPlane />
                    </li>
                </ul>
            </div>
        </div>
        <div className="bottom">
            <p>© Copyright 2025 | All rights reserved by CLARADIX</p>
        </div>
    </div>
  )
}

export default Footer