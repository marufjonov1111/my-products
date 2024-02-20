import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Header(){
    return(
        <header>    
          <div className="container">
          <nav>
                <Link>
                    Logo
                </Link>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to='/'>Home</Link>    
                </li>
                <li className="nav__item">
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            </nav>``
          </div>

        </header>
    )
}

export default Header
