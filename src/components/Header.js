import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

const Header = (props)=> {
    return <div className="nav">
        <Link to="/">HOME</Link>
        <Link to="/favorites">My Favorites</Link>
    </div>
}

export default Header