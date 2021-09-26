import logo from '../images/logo.png';
import CartItem from '../apis/CartItem';
import '../styles/header.css'

function Header() {
    return (
        <header className="header">

            <a href="#" className="logo">
                <img src={logo} alt="" />
            </a>

            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#products">products</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="#blogs">blogs</a>
            </nav>

            <div className="icons">
                <div className="fas fa-search" id="search-btn"></div>
                <div className="fas fa-shopping-cart" id="cart-btn"></div>
                <div className="fas fa-bars" id="menu-btn"></div>
            </div>

            <div className="search-form">
                <input type="search" id="search-box" placeholder="search here..." />
                <label for="search-box" className="fas fa-search"></label>
            </div>

            <div className="cart-items-container">
                {CartItem.map((item) => (
                    <div key={item.images} className="cart-item">
                        <span className="fas fa-times"></span>
                        <img src={item.images} alt=""/>
                        <div className="content">
                            <h3>{item.name}</h3>
                            <div className="price">{item.price}/-</div>
                        </div>
                    </div>

                ))}

                <a href="#" className="btn">checkout now</a>
            </div>

        </header>
    )
}

export default Header
