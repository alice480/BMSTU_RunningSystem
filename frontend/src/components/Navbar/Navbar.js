import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className='s1'>
                <img src={logo} alt='logo' className='logo' />

                <div className='searchbar'>
                    <input typ="text" placeholder="Поиск мероприятий" className='search' />

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </button>
                </div>

                <div className='right'>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/login">Login</Dropdown.Item>
                            <Dropdown.Item href="/signup">Signup</Dropdown.Item>
                            <Dropdown.Item href="/user/accountsettings">Profile</Dropdown.Item>
                            <Dropdown.Item href="#">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='s2'>
                <Link to='/home'>
                    <a>На главную</a>
                </Link>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Мероприятия
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Меро1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Меро2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Меро3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link to='/about'>
                    <a>О нас</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar