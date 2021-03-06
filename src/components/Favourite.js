import "../styles/favourite.css";
import React, { useState, useEffect } from "react";

function Favourite({ onAddItem }) {
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    async function fetchFavouriteList() {
      const requestUrl =
        "https://coffee-json-server.herokuapp.com/api/best-selling";
      const response = await fetch(requestUrl);
      const products = await response.json();
      setFavouriteList(products);
    }

    fetchFavouriteList();
  }, []);

  const onToggleFavorite = (productId) => {
    setFavouriteList((products) =>
      products.map((product) => ({
        ...product,
        favourite:
          product.id === productId ? !product.favourite : product.favourite,
      }))
    );
  };

  const handleAddItem = (item) => {
    if (item.left === 0) {
      alert("Product is sold-out");
    } else {
        onAddItem({
          id: item.id,
          image: item.image,
          name: item.name,
          price: item.price,
        });
    }
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">
        {" "}
        Top <span>Favourite</span>{" "}
      </h1>

      <div className="box-container">
        {favouriteList.map((product) => (
          <div key={product.id} className="box">
            <div className="image">
              <span
                className={`products-left ${
                  product.left < 100 && product.left > 0 ? "active" : ""
                }`}
              >
                {product.left} left
              </span>
              <div className="icons">
                <i
                  onClick={() => onToggleFavorite(product.id)}
                  className={`${product.favourite ? "fas" : "far"} fa-heart`}
                ></i>
              </div>
              <div className={`sole-out ${product.left === 0 ? "active" : ""}`}>
                <span>sold-out</span>
              </div>
              {/* <div className={`add-to-cart ${product.left > 0 ? "active" : ""}`}></div> */}
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <h3 className="product-name">{product.name}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="price">
                {" "}
                {product.price} <span>{product["old-price"]}</span>
              </div>
              <button
                onClick={() => handleAddItem(product)}
                className="btn"
                type="button"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Favourite;
