import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {AiFillCloseCircle} from 'react-icons/ai'
import './header.css'
function Header(){
    const [open,setOpen] =  useState(false)
    return(
        <>
    <header id="header-section">
        <div className="navbar-container container">
            <div className="logo">
                <h1>logo</h1>
            </div>
            <div className="navbar">
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/">home</Link></li>
                    <li className="nav-item"><Link to="/contact">contact</Link></li>
                    <li className="nav-item"><Link to="/about">about</Link></li>
                    <button className="nav-item-2" onClick={()=> setOpen(true) }><Link >Register/Login</Link></button>
                </ul>
            </div>
            <div className={`login ${open ? 'login-active':'' } `}>
                <div className="close" onClick={()=> setOpen(false) }><AiFillCloseCircle/></div>
            <div className="welcome-form">
                <div className="welcome-h1">
                    <h1>welcome</h1>
                </div>    
                <form action="" className="form-box">
                    <input type="email" id="email" name="email" placeholder="email address" required/> <br /> <br />
                    <input type="password" id="password" name="password" placeholder="password" required/> <br />
                    <p>forgot password</p>
                    <div className="login-button">
                        <input type="submit" value={"log in"} />
                    </div>
                </form>
            </div>
            </div>
        </div>
    </header>
        </>
    )
}
export default Header