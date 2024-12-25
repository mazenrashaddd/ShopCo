import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import { Link } from 'react-router-dom'

export default function ShopNow() {
  return (
    <div className="container">
        <div className="row mt-5 g-5">
          <div className="col-lg-6">
            <div className='w-100 h-100'>
              <h1 className='heading'> FIND CLOTHES THAT MATCHES YOUR STYLE </h1>
              <p className='mt-4'> Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. </p>
              <Link to = "/shop"><button className='shopNowButton btn btn-primary rounded-5 mt-1 border-0 shadow'> Shop Now </button></Link>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <div className = "stats border-end pe-4">
                  <h2 className='fw-bold'> 200+ </h2>
                  <p> International Brands </p>
                </div>
                <div className = "stats">
                  <h2 className='fw-bold'> 2000+ </h2>
                  <p> High-Quality Products </p>
                </div>
                <div className = "stats border-start ps-4">
                  <h2 className='fw-bold'> 30000+ </h2>
                  <p> Happy Customers </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-picture position-relative w-100 h-100">
              <svg className="header-icons-one"xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 104 104" fill="none">
                <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"/>
              </svg>
              <svg className="header-icons-two"xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 104 104" fill="none">
                <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
    </div>
  )
}
