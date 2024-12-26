import React, { useEffect, useState } from 'react'
import "./style.css"
import Items from './Components/Items'
import Summary from './Components/Summary'
import EmptyCart from './Components/EmptyCart'

export default function Cart({cartContent, setCartContent, shopProducts, cartCounter, setCartCounter, totalPrice, setTotalPrice}) {
  return (
    <div className='container my-5'>
      {(cartCounter == 0 ?
        <EmptyCart/>
        :
        <div className="row g-3">
          <div className="col-7">
            <Items cartContent = {cartContent} setCartContent = {setCartContent} shopProducts = {shopProducts} cartCounter = {cartCounter} setCartCounter = {setCartCounter} totalPrice = {totalPrice} setTotalPrice = {setTotalPrice}/>
          </div>
          <div className="col-5">
            <Summary totalPrice = {totalPrice} setTotalPrice = {setTotalPrice}/>
          </div>
        </div>
      )}
    </div>
  )
}
