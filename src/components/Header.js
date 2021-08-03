import React from "react"
import { Link } from "react-router-dom"
import "./header.css"
import Logo from "../img/logo.jpeg"

const Header = (props)=> {
    return <div className="nav">
        <img className="logo" src={Logo} alt="baseball logo" style={{width:150}}/>
        <Link to="/">HOME</Link>
        <Link to="/favorites">My Favorites</Link>
    </div>
}

export default Header