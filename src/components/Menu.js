import '../styles/menu.css'
import MenuItems from '../apis/MenuItems'
function Menu({ CartList, onAddItem }) {

    return (
        <section className="menu" id="menu">
            {console.log('check menu: ', MenuItems)}
            {console.log('check cart: ', CartList)}
            <h1 className="heading"> our <span>menu</span> </h1>

            <div className="box-container">
                {MenuItems.map((item) => (
                    <div key={item.id} id={item.id} className="box">
                        <img src={ item.images } alt="coffee images"/>
                        <h3>{item.title}</h3>
                        <div className="price">{item.price} <span>{item['old-price']}</span></div>
                        <button onClick={() => onAddItem({
                            images: item.images,
                            name: item.title,
                            price: item.price
                        })} 
                        type="button" 
                        className="btn">add to cart</button>
                    </div>
                ))}
            </div>
            {/* onClick={handleCart(item.images, item.title, item.price)} */}
        </section>
    )
}

export default Menu
