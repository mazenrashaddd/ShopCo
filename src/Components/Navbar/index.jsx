import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./style.css"
import { Link } from 'react-router-dom'

export default function Navbar({logOut, cartCounter}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 z-3">
      <div className="container">
        <Link className="navbar-brand me-4 heading" to = "home">SHOP.CO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-3 mb-2 mb-lg-0 fw-medium d-flex justify-content-between align-items-center">
            <li className="shopNavItem nav-item rounded-2">
              <Link className="nav-link active" aria-current="page" to = "/shop">
                <div className='d-flex align-items-center position-relative'>
                  <div>Shop</div>
                  <i class="shopDropMenu fa-solid fa-chevron-down fa-2xs ms-1"></i>
                  <div className="shopMenu rounded-3 px-4 py-3 d-none">
                    <div className="row g-2">
                      <div className="col-6 gy-2">
                        <div>
                          <Link to = "/shop">
                            <div className='category rounded-2 px-2 pt-2 pb-1'>
                              <h2>Men's clothes</h2>
                              <p>In attractive and spectacular colors and desgins</p>
                            </div>
                          </Link>
                          <Link to = "/shop">
                            <div className='category rounded-2 px-2 pt-2 pb-1'>
                              <h2>Kids clothes</h2>
                              <p>For all ages, with happy and beautiful colors</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-6 gy-2">
                        <div>
                          <Link to = "/shop">
                            <div className='category rounded-2 px-2 pt-2 pb-1'>
                              <h2>Women's clothes</h2>
                              <p>Ladies, your style and tastes are important to us</p>
                            </div>
                          </Link>
                          <Link to = "/shop">
                            <div className='category rounded-2 px-2 pt-2 pb-1'>
                              <h2>Bags and Shoes</h2>
                              <p>Suitable for men, women and all tastes and styles</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item rounded-2">
              <Link className="nav-link active" aria-current="page" to = "/shop">On Sale</Link>
            </li>
            <li className="nav-item rounded-2">
              <Link className="nav-link active" aria-current="page" to = "/shop">New Arrivals</Link>
            </li>
            <li className="nav-item rounded-2">
              <Link className="nav-link active" aria-current="page" to = "/shop">Brands</Link>
            </li>
          </ul>
          <div className="searchContainer">
              <input className="searchBar form-control rounded-5 px-5 py-2" type="search" placeholder="Search for products...." aria-label="Search"/>
              <i className="searchIcon fa-solid fa-magnifying-glass fa-sm px-1"></i>
          </div>
          <div className="userManage d-flex justify-content-between align-items-center">
            <div className='mx-4'>
              <Link to = "/cart">
                <div className='pb-3'>
                  <div className='cartCounter text-center bg-black rounded-circle text-white'>{cartCounter}</div>
                  <i className="fa-solid fa-cart-shopping fa-sm"></i>
                </div>
              </Link>
            </div>
            <div>
              <Link to = "/profile">
                <i className="fa-regular fa-user fa-sm"></i>
              </Link>
            </div>
            {localStorage.getItem("id") != null ?
              <div className='logout mx-4 d-flex justify-content-center align-items-center' role = "button" onClick={logOut}>
                Logout
                <i className="fa-solid fa-right-from-bracket fa-xs text-danger ms-2"></i>
              </div>
              :
              <></>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
