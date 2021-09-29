import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Products from './components/Products'
import Review from './components/Review'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import CartItem from './apis/CartItem'
import React, { useState } from 'react'


function App() {
  const [CartList, updateCart] = useState(CartItem)

  return (
    <div className="App">
      <Header CartList={CartList}/>

      <Home />

      <About />

      <Menu CartList={CartList} onAddItem={item => {updateCart([...CartList, item]); console.log('check update:', CartList)}} />

      <Products />

      <Review />

      <Contact />

      <Blogs />

      <Footer />
    </div>
  );
}

export default App;
