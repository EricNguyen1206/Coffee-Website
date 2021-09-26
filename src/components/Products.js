import '../styles/products.css'
import ProductItems from '../apis/ProductItems'

function Products() {
    return (
        <section className="products" id="products">

            <h1 className="heading"> our <span>products</span> </h1>

            <div className="box-container">
                {ProductItems.map(product => (
                    <div  key={product.image} className="box">
                        <div className="icons">
                            <a href="#" className="fas fa-shopping-cart"></a>
                            <a href="#" className={`${product.like == 'true' ? 'fas' : 'far'} fa-heart`}></a>
                            <a href="#" className="fas fa-eye"></a>
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
