import '../styles/products.css'
import ProductItems from '../apis/ProductItems'
// import React, { useState } from 'react'

function Products() {
    // const [favourite, setFavourite] = useState(false)

    // const handleClick = () => {
    //     let like = document.getElementsByClassName('fa-heart');
    //     like.classList.toggle('fas')
    //     like.classList.toggle('far')
    // }

    return (
        <section className="products" id="products">

            <h1 className="heading"> our <span>products</span> </h1>

            <div className="box-container">
                {ProductItems.map(product => (
                    <div  key={product.image} className="box">
                        <div className="icons">
                            <i href="#" className="fas fa-shopping-cart"></i>
                            <i className={`${product.like ? 'fas' : 'far'} fa-heart`}></i>
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
