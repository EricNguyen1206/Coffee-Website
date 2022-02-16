import { memo } from "react";
import "../styles/menu.css";
import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

function ProductList({ onAddItem }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProductsList() {
            const requestUrl =
                "https://coffee-json-server.herokuapp.com/api/products";
            const response = await fetch(requestUrl);
            const data = await response.json();

            setProducts(data);
        }
        fetchProductsList();
    }, []);

    const renderProductsList = (products, onAddItem) => {
        return products.map((item) => (
            <ProductItem key={item.id} infor={item} onAddItem={onAddItem} />
        ));
    };

    return (
        <section className="menu" id="menu">
            <h1 className="heading">
                {" "}
                our <span>products</span>{" "}
            </h1>

            <div className="box-container">
                {renderProductsList(products, onAddItem)}
            </div>
        </section>
    );
}

export default memo(ProductList);
