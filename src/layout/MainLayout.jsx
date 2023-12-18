import React from 'react'
import Navbar from '../section/navbar/Navbar'
import Footer from '../section/footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout