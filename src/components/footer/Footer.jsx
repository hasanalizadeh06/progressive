import React from 'react'
import "./Footer.css"
import logo from "../../assets/navbar/logo.png"
import { NavLink } from 'react-router-dom'

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
                                <NavLink to="help-center">
                                    051 555 55 55
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="privacy-policy">
                                    Babek Plaza
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right">
                <ul>
                    <li>
                        F
                    </li>
                    <li>
                        I
                    </li>
                    <li>
                        W
                    </li>
                    <li>
                        T
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer