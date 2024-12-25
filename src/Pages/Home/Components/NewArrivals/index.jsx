import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import { Link } from 'react-router-dom'

export default function NewArrivals() {
  return (
    <div className='container text-center h-100'>
      <h1 className='heading newArrivalsHeader my-5'> NEW ARRIVALS </h1>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <Link>
            <div className="card border-0 rounded-3">
                <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic1.png&w=384&q=75" className="card-img-top" alt="..."/>
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
                  <h5 className='mt-1'>$120</h5>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link>
            <div className="card border-0 rounded-3">
                <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic2.png&w=384&q=75" className="card-img-top" alt="..."/>
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
                  <h5 className='mt-1'>$208</h5>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link>
            <div className="card border-0 rounded-3">
                <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic3.png&w=384&q=75" className="card-img-top" alt="..."/>
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
                  <h5 className='mt-1'>$180</h5>
                </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link>
            <div className="card border-0 rounded-3">
                <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic4.png&w=384&q=75" className="card-img-top" alt="..."/>
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
                  <h5 className='mt-1'>$112</h5>
                </div>
            </div>
          </Link>
        </div>
      </div>

      <Link to = "/shop"><button className='viewAllButton btn btn-primary btn-light text-dark rounded-5 py-2 mt-2 mb-4'> View All </button></Link>
      <hr className='mb-5'/>
    </div>
  )
}
