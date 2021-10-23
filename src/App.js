import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Favourite from './components/Favourite'
import Review from './components/Review'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import React, { useState, useEffect } from 'react'


function App() {
  const [cartList, setCartList] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    async function fetchProductsList() {
      const requestUrl = 'https://coffee-json-server.herokuapp.com/api/cart'
      const response = await fetch(requestUrl)
      const products = await response.json()
      setCartList(products)
    }

    async function fetchImages() {
      const requestUrl = 'https://coffee-json-server.herokuapp.com/api/images'
      const response = await fetch(requestUrl)
      const images = await response.json()
      console.log(images)
      setImages(images)
    }

    fetchImages()
    fetchProductsList()


  }, []);

  const handleRemoveItem = (id) => {
    setCartList(cartList.filter(item => item.id !== id))
  }

  const handleAddItem = (item) => {
    console.log("Check include: ", cartList.find(cart => cart.id === item.id))

    if(!cartList.find(cart => cart.id === item.id)) {
      setCartList([...cartList, item])
    }
  }

  return (
    <div className="App">
      <Header CartList={cartList} onDeleteItem={id => {handleRemoveItem(id)}} logo={images.logo}/>

      <Home homeBanner={images["home-banner"]}/>
      
      <Favourite />

      <About aboutBanner={images["about-banner"]} />

      <Products onAddItem={item => {handleAddItem(item)}} />

      <Review />

      <Contact />

      <Blogs />

      <Footer />
    </div>
  );
}

export default App;
