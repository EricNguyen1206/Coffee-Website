import '../styles/header.css'
import React, { useState, useEffect } from 'react'

function Header({ CartList, onDeleteItem, logo }) {
    const [cartActive, setCartActive] = useState(false)
    const [searchActive, setSearchActive] = useState(false)
    const [navbarActive, setNavbarActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setCartActive(false)
            setSearchActive(false)
            setNavbarActive(false)
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const togleCart = () => {
        setCartActive(!cartActive)
        setSearchActive(false)
        setNavbarActive(false)
    }

    const togleSearchActive = () => {
        setSearchActive(!searchActive)
        setCartActive(false)
        setNavbarActive(false)
    }

    const togleNavbarActive = () => {
        setNavbarActive(!navbarActive)
        setSearchActive(false)
        setCartActive(false)
    }
    
    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="" />
            </a>

            <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#products">products</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="#blogs">blogs</a>
            </nav>

            <div className="icons">
                <div onClick={() => togleSearchActive()} className="fas fa-search" id="search-btn"></div>
                <div onClick={() => togleCart()} className="fas fa-shopping-cart" id="cart-btn"></div>
                <div onClick={() => togleNavbarActive()} className="fas fa-bars" id="menu-btn"></div>
            </div>

            <div className={`search-form ${searchActive ? 'active' : ''}`}>
                <input type="search" id="search-box" placeholder="search here..." />
                <label for="search-box" className="fas fa-search"></label>
            </div>

            <div className={`cart-container ${cartActive ? 'active': ''}`}>
                <ul className="cart-list">
                    {CartList.map((item) => (
                        <li key={item.id} className="cart-item">
                            <span onClick={() => onDeleteItem(item.id)} className="fas fa-times"></span>
                            <img src={item.image} alt=""/>
                            <div className="content">
                                <h3>{item.name}</h3>
                                <div className="price">{item.price}/-</div>
                            </div>
                        </li>
                    ))}
                </ul>

                <a href="/" className="btn">checkout now</a>
            </div>

        </header>
    )
}

export default Header
