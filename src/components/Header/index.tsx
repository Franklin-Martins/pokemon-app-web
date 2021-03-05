import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

import logo from '../../assets/logo.png'

const Header: React.FC = () => {
    return (
        <header className="main-header">
            <img src={logo} alt="Pokemon"/>
            <nav>
                <ul>
                    <li> <Link to="/" > <h3>Home</h3> </Link> </li>
                    <li> <h3>About</h3> </li>
                    <li> <h3> Donate </h3> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header