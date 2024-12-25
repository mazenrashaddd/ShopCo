import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import { Link } from 'react-router-dom'

export default function TopSelling() {
  return (
    <div className='container text-center h-100'>
      <h1 className='heading topSellingHeader my-5'> TOP SELLING </h1>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <Link>
            <div className="card border-0 rounded-3">
                <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic5.png&w=384&q=75" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">T-shirt with Tape Details</h5>
                  <div className="d-flex align-items-center">
                    <div className='starRate'>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star-half-stroke fa-xs"></i>
                    </div>
                    <div className='numberRate'>
                        4.5 <span> /5 </span>
                    </div>
                  </div>
                  <h5 className='mt-1'>$186</h5>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link>
            <div className="card border-0 rounded-3">
                <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic6.png&w=384&q=75" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Skinny Fit Jeans</h5>
                  <div className="d-flex align-items-center">
                    <div className='starRate'>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star-half-stroke fa-xs"></i>
                    </div>
                    <div className='numberRate'>
                        4.5 <span> /5 </span>
                    </div>
                  </div>
                  <h5 className='mt-1'>$145</h5>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link>
            <div className="card border-0 rounded-3">
                <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic7.png&w=384&q=75" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Chechered Shirt</h5>
                  <div className="d-flex align-items-center">
                    <div className='starRate'>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star-half-stroke fa-xs"></i>
                    </div>
                    <div className='numberRate'>
                        4.5 <span> /5 </span>
                    </div>
                  </div>
                  <h5 className='mt-1'>$80</h5>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link>
            <div className="card border-0 rounded-3">
                <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic8.png&w=384&q=75" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Sleeve Striped T-shirt</h5>
                  <div className="d-flex align-items-center">
                    <div className='starRate'>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star fa-xs"></i>
                      <i className="fa-solid fa-star-half-stroke fa-xs"></i>
                    </div>
                    <div className='numberRate'>
                        4.5 <span> /5 </span>
                    </div>
                  </div>
                  <h5 className='mt-1'>$210</h5>
                </div>
            </div>
          </Link>
        </div>
      </div>

      <Link to = "/shop"><button className='viewAllButton btn btn-primary btn-light text-dark rounded-5 py-2 mt-2 mb-4'> View All </button></Link>
    </div>
  )
}
