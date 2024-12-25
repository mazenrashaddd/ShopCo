import React from 'react'
import "./style.css"
import ShopNow from './Components/ShopNow'
import Brands from './Components/Brands'
import NewArrivals from './Components/NewArrivals'
import TopSelling from './Components/TopSelling'
import BrowseByDressStyle from './Components/BrowseByDressStyle'
import Reviews from './Components/Reviews'

export default function Home() {
  return (
    <>
      <ShopNow/>
      <Brands/>
      <NewArrivals/>
      <TopSelling/>
      <BrowseByDressStyle/>
      <Reviews/>
    </>
  )
}
