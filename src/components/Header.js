import '../styles/header.css'
import React, { useState, useEffect } from 'react'

function Header({ togleCart, logo, countCartItem }) {
    const [searchActive, setSearchActive] = useState(false)
    const [navbarActive, setNavbarActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setSearchActive(false)
            setNavbarActive(false)
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const togleSearchActive = () => {
        setSearchActive(!searchActive)
        setNavbarActive(false)
    }

    const togleNavbarActive = () => {
        setNavbarActive(!navbarActive)
        setSearchActive(false)
    }
    
    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="" />
            </a>

            <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
                <a href="#home">home</a>
                <a href="#products">favourite</a>
                <a href="#about">about</a>
                <a href="#menu">products</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="#blogs">blogs</a>
            </nav>

            <div className="icons">
                <div onClick={() => togleSearchActive()} className="fas fa-search" id="search-btn"></div>
                <div onClick={() => togleCart()} className="fas fa-shopping-cart" id="cart-btn"></div>
                <span>{countCartItem()}</span>
                <div onClick={() => togleNavbarActive()}  className="fas fa-bars" id="menu-btn"></div>
            </div>

            <div className={`search-form ${searchActive ? 'active' : ''}`}>
                <input type="search" id="search-box" placeholder="search here..." />
                <label for="search-box" className="fas fa-search"></label>
            </div>

            

        </header>
    )
}

export default Header
