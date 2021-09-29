import '../styles/products.css'
import ProductItems from '../apis/ProductItems'
// import CartItem from '../apis/CartItem'
import React, { useState } from 'react'

function Products() {
    const [ProductLists, setProducts] = useState(ProductItems)
    // const [CartList, setCartList] = useState(CartItem)

    const onToggleFavorite = (productId) => {
        setProducts(products => (
            products.map(product =>({
                ...product,
                favourite: product.id === productId ? !product.favourite : product.favourite,
            }))
        ))
        // onToggleFavorite(productId)
    }

    // const toAddProduct = (product) => {
    //     setCartList
    // }

    return (
        <section className="products" id="products">

            <h1 className="heading"> our <span>products</span> </h1>

            <div className="box-container">
                {ProductLists.map(product => (
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
