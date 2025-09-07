import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Shop from '../components/Shop'
import Products from '../components/Products'
import FindProduct from '../components/FindProduct'
import Collection from '../components/Collection'
import LatestBanner from '../components/latestBanner'
import Cards from '../components/Cards'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Shop/>
        <Products/>
        <FindProduct/>
        <Collection/>
        <LatestBanner/>
        <Cards/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Home