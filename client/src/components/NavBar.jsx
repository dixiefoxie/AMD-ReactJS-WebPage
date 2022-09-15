import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'


export const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () =>setClick(!click);


    return (
        <div>
            <nav className='navbar'>

                <NavLink to='/' className='nav-logo'>
                    Ahmet Mert Demirer {' '}
                    <i className="fa-solid fa-atom"></i>
                </NavLink>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item' >
                        <NavLink
                            to='/'
                            activeclassname="active"
                            className='nav-links'> Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about'
                            activeclassname='active'
                            className='nav-links'
                            onClick={handleClick}> About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/blog'
                            activeclassname='active'
                            className='nav-links'
                            onClick={handleClick}> Blog</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/project'
                            activeclassname='active'
                            className='nav-links'
                            onClick={handleClick}
                            > My Projects</NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink to='/contact'
                            activeclassname='active'
                            className='nav-links'
                            onClick={handleClick}> Contact Us</NavLink>
                    </li>
                </ul>

                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

            </nav>
        </div>
    )
}
