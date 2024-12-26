import React, { useEffect } from 'react'
import "./style.css"

export default function Summary({totalPrice, setTotalPrice}) {
  setTotalPrice(JSON.parse(localStorage.getItem("price")));

  useEffect(() => {
    setTotalPrice(JSON.parse(localStorage.getItem("price")))
  }, [totalPrice])

  return (
    <div>
      <div className="cartSummary rounded-4 border p-3 h-100">
        <h5 className='mb-4'>Order Summary</h5>
        <div className="d-flex justify-content-between">
          <p className='fw-normal'>Subtotal</p>
          <h5 className='text-black'>${totalPrice}</h5>
        </div>
        <div className="d-flex justify-content-between">
          <p className='fw-normal'>Discount (-0%)</p>
          <h5 className='text-danger'>-$0</h5>
        </div>
        <div className="d-flex justify-content-between">
          <p className='fw-normal'>Delivery Fee</p>
          <h5 className='text-black fw-black'>Free</h5>
        </div>
        <hr className='m-0 mb-3'/>
        <div className="d-flex justify-content-between">
          <p className='fw-normal text-black'>Total</p>
          <h5 className='text-black fw-black'>${totalPrice}</h5>
        </div>
        <div className="promoContainer d-flex justify-content-between align-items-center">
          <div>
            <input className="promoBar form-control rounded-5 px-5 py-2" placeholder="Add promo code"/>
            <i className="promoIcon fa-solid fa-tag fa-sm px-1"></i>
          </div>
          <div>
            <button type = "submit" className="applyPromoButton my-3 btn btn-light rounded-5 shadow"> Apply </button>
          </div>
        </div>
        <div className="d-flex justify-content-center">
            <button type = "submit" className="checkOutButton my-3 btn btn-light rounded-5 shadow"> 
              <div className="d-flex justify-content-center align-items-center">
                <div>Checkout</div>
                <i class="checkOutIcon fa-solid fa-arrow-right fa-sm ms-2"></i>
              </div>
            </button>
          </div>
      </div>
    </div>
  )
}
