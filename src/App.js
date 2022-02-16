import "./App.css";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import Home from "./components/Home";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Favourite from "./components/Favourite";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";

function App() {
  const [cartList, setCartList] = useState([]);
  const [cartActive, setCartActive] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchProductsList() {
      const requestUrl = "https://coffee-json-server.herokuapp.com/api/cart";
      const response = await fetch(requestUrl);
      const products = await response.json();
      setCartList(products);
    }

    async function fetchImages() {
      const requestUrl = "https://coffee-json-server.herokuapp.com/api/images";
      const response = await fetch(requestUrl);
      const images = await response.json();
      console.log(images);
      setImages(images);
    }

    fetchImages();
    fetchProductsList();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setCartActive(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const togleCart = () => {
    console.log("cart: " + cartActive);
    setCartActive(!cartActive);
  };

  const onDeleteItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const handleAddItem = (item) => {
    console.log(
      "Check include: ",
      cartList.find((cart) => cart.id === item.id)
    );
    const found = cartList.findIndex((element) => element.id === item.id);
    if (found !== -1) {
      cartList[found].amount++;
      setCartList([...cartList]);
    } else {
      item.amount = 1;
      setCartList([...cartList, item]);
    }
  };

  const countCartItem = () => {
    return cartList.reduce((sum, item) => (sum += item.amount), 0);
  };

  const changeAmount = (amount, id) => {
    let itemList = [...cartList]

    const index = itemList.findIndex((element) => element.id === id)
    if(index !== -1) {
      if(amount <= -1 && itemList[index].amount<=1) {
        onDeleteItem(id)
        return
      }
      itemList[index].amount += amount;
      setCartList(itemList)
    }
  }

  return (
    <div className="App">
      <Header
        togleCart={togleCart}
        logo={images.logo}
        countCartItem={countCartItem}
      />

      <CartModal
        cartActive={cartActive}
        CartList={cartList}
        onDeleteItem={onDeleteItem}
        changeAmount={changeAmount}
      />

      <Home homeBanner={images["home-banner"]} />

      <Favourite
        onAddItem={(item) => {
          handleAddItem(item);
        }}
      />

      <About aboutBanner={images["about-banner"]} />

      <ProductList
        onAddItem={(item) => {
          handleAddItem(item);
        }}
      />

      <Review />

      <Contact />

      <Blogs />

      <Footer />
    </div>
  );
}

export default App;
