import React, { useState } from 'react'
import '../home/home.css'
import iphon from '../../assets/images/iphon.jpg'
import Product from '../../components/Product'



const Home = () => {

  return (
    <>
    <div className="container">
      <div className="product_wrapper">
        <Product sorce={iphon} pricee="$1000"/>
        <Product sorce={iphon} pricee="$1500"/>
        <Product sorce={iphon} pricee="$7000"/>
        <Product sorce={iphon} pricee="$8000"/>
        <Product sorce={iphon} pricee="$5000"/>
        <Product sorce={iphon} pricee="$3500"/>
        <Product sorce={iphon} pricee="$100"/>
        <Product sorce={iphon} pricee="$100"/>
      </div>
    </div>
    </>
  )
}

export default Home