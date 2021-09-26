import '../styles/menu.css'
import MenuItems from '../apis/MenuItems'
// import MenuIcon from '../images/menu-1.png'

function Menu() {
    return (
        <section className="menu" id="menu">

            <h1 className="heading"> our <span>menu</span> </h1>

            <div className="box-container">
                {MenuItems.map((item) => (
                    <div key={item.images} className="box">
                        <img src={ item.images } alt="coffee images"/>
                        <h3>{item.title}</h3>
                        <div className="price">{item.price} <span>{item['old-price']}</span></div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Menu
