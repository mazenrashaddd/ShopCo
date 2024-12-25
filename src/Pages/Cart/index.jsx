import React from 'react'
import "./style.css"
import Items from './Components/Items'
import Summary from './Components/Summary'
import EmptyCart from './Components/EmptyCart'

export default function Cart() {
  return (
    <div className='container my-5'>
      {(1 ?
        <EmptyCart/>
        :
        <div className="row g-3">
          <div className="col-7">
            <Items/>
          </div>
          <div className="col-5">
            <Summary/>
          </div>
        </div>
      )}
    </div>
  )
}
