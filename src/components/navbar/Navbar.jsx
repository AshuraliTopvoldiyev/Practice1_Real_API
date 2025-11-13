import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { IoCartOutline, IoSearch } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import Signup from '../../pages/signup/Signup';

function Navbar() {
    return (
        <>
            <section className="navbar">
                <div className="container">
                    <div className="nav_logo">
                        <Link><h1>Exclusive</h1></Link>
                    </div>
                    <div className="nav_link">
                        <Link to={"/"}>Home</Link>
                        <Link>Contact</Link>
                        <Link>About</Link>
                        <Link to={"/signup"}>Sign Up</Link>
                    </div>
                    <div className="nav_icon">
                        <form action="">
                            <input type="text" placeholder='What are you looking for ?' />
                            <IoSearch />
                        </form>
                        <div className="nav_icons">
                            <FaRegHeart />
                            <IoCartOutline />
                        </div>
                    </div>

                </div>

            </section >

        </>
    )
}

export default Navbar
