/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import NavigationBar from './nav-bar/nav-bar'
import Header from './header/header'
import Footer from './footer/footer'
import Product from './products/product'
import Products from './products/products'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NavigationBar />
    <Header /> */}
    <Product />
    {/* <Footer /> */}
  </React.StrictMode>,
)
