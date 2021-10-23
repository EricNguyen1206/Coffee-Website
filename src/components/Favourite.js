import '../styles/products.css'
import ProductItems from '../apis/ProductItems'
// import CartItem from '../apis/CartItem'
import React, { useState, useEffect} from 'react'

function Products() {
    const [favouriteList, setFavouriteList] = useState([])
    // const [CartList, setCartList] = useState(CartItem)

    useEffect(() => {
        async function fetchFavouriteList() {
            const requestUrl = 'http://localhost:8000/api/best-selling'
            const response = await fetch(requestUrl)
            const products = await response.json()
            setFavouriteList(products)
        }

        fetchFavouriteList()
    }, [])

    const onToggleFavorite = (productId) => {
        setFavouriteList(products => (
            products.map(product =>({
                ...product,
                favourite: product.id === productId ? !product.favourite : product.favourite,
            }))
        ))
    }

    return (
        <section className="products" id="products">

            <h1 className="heading"> Top <span>Favourite</span> </h1>

            <div className="box-container">
                {favouriteList.map(product => (
                    <div  key={product.id} className="box">
                        <div className="icons">
                            <i href="#" className="fas fa-shopping-cart"></i>
                            <i onClick={() => onToggleFavorite(product.id)} className={`${product.favourite ? 'fas' : 'far'} fa-heart`}></i>
                            <i href="#" className="fas fa-eye"></i>
                        </div>
                        <div className="image">
                            <img src={product.image} alt=""/>
                        </div> 
                        <div className="content">
                            <h3>{product.name}</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="price"> {product.price} <span>{product['old-price']}</span></div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Products
