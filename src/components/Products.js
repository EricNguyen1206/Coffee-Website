import '../styles/menu.css'
import React, { useState, useEffect } from 'react'

function Menu({ onAddItem }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProductsList() {
            const requestUrl = 'https://coffee-json-server.herokuapp.com/api/products'
            const response = await fetch(requestUrl)
            const data = await response.json()

            setProducts(data)
        }
        fetchProductsList()
    }, [])


    return (
        <section className="menu" id="menu">
            <h1 className="heading"> our <span>products</span> </h1>

            <div className="box-container">
                {products.map((item) => (
                    <div key={item.id} id={item.id} className="box">
                        <img src={ item.image } alt="coffee images"/>
                        <h3>{item.title}</h3>
                        <div className="price">{item.price} <span>{item['old-price']}</span></div>
                        <button onClick={() => onAddItem({
                            id: item.id,
                            image: item.image,
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
