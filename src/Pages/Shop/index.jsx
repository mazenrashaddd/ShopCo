import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { products } from "../../Data/products";
import "./style.css";

export default function Shop({ shopProducts }) {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(60);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > minPrice) setMaxPrice(value);
  };

  return (
    <>
      <div className="bg-white mt-0 py-4">
        <div className="container-fluid w-75 m-auto ">
          <div className="row gx-5 my-4">
            <div className="col-4 p-3 border border-1 border-black rounded-4 d-none d-md-block">
              <h5 className="fs-5">Filters</h5>
              <hr />
              <div className="d-flex justify-content-between px-4">
                <p>T-shirts</p>
                <p>
                  <i class="fa-solid fa-greater-than"></i>
                </p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p>Shorts</p>
                <p>
                  <i class="fa-solid fa-greater-than"></i>
                </p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p>Shirts</p>
                <p>
                  <i class="fa-solid fa-greater-than"></i>
                </p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p>Hoodie</p>
                <p>
                  <i class="fa-solid fa-greater-than"></i>
                </p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p>Jeans</p>
                <p>
                  <i class="fa-solid fa-greater-than"></i>
                </p>
              </div>
              <hr />
              <h4 className="fw-bolder">Price</h4>
              <div className="container ">
                <div className="d-flex flex-column align-items-center">
                  <div className="w-100">
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100"
                      value={minPrice}
                      onChange={handleMinChange}
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100"
                      value={maxPrice}
                      onChange={handleMaxChange}
                    />
                  </div>
                  <div className="mt-3">
                    <p>
                      Selected Price Range: <strong>{minPrice}</strong> -{" "}
                      <strong>{maxPrice}</strong>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <h4 className="fw-bolder">Color</h4>
              <div className="">
                <button type="button" class="btn m-2 rounded-5 btn-primary">
                  Blue
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  Gray
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-success">
                  Green
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-danger">
                  Red
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-warning">
                  Yellow
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-info">
                  Cyan
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-light">
                  White
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-dark">
                  Black
                </button>
              </div>
              <hr />
              <h4 className="fw-bolder">Size</h4>
              <div className=" ">
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  XX-Small
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  X-Small
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  Small
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  Medium
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  Large
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  X-Large
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  XX-Large
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  3X-Large
                </button>
                <button type="button" class="btn m-2 rounded-5 btn-secondary">
                  4X-Large
                </button>
              </div>
              <div className="">
                <h5 className="fs-5">Filters</h5>
                <hr />
                <div className="d-flex justify-content-between px-4">
                  <p>Casual</p>
                  <p>
                    <i class="fa-solid fa-greater-than"></i>
                  </p>
                </div>
                <div className="d-flex justify-content-between px-4">
                  <p>Formal</p>
                  <p>
                    <i class="fa-solid fa-greater-than"></i>
                  </p>
                </div>
                <div className="d-flex justify-content-between px-4">
                  <p>Party</p>
                  <p>
                    <i class="fa-solid fa-greater-than"></i>
                  </p>
                </div>
                <div className="d-flex justify-content-between px-4">
                  <p>Gym</p>
                  <p>
                    <i class="fa-solid fa-greater-than"></i>
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-dark rounded-5 px-5">
                  Apply Filter
                </button>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between">
                <h4>Casual</h4>
                <div className="d-flex ">
                  <p className="m-2">Showing 1-10 of 100 Products Sort by:</p>
                  <span>
                    <select
                      class="form-select "
                      aria-label="Default select example"
                    >
                      <option selected>Most Popular</option>
                      <option value="1">Low Price</option>
                      <option value="2">High Price</option>
                    </select>
                  </span>
                </div>
              </div>
              <div className="row my-3 gy-4">
                {shopProducts.map((item, i) => {
                  return (
                    <div className="col-md-4 col-sm-6" key={i}>
                      <Link to={`/product/${i}`}>
                        <div className="card border-0 rounded-3">
                          <img
                            src={item.image}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <div className="d-flex align-items-center">
                              <div className="starRate">
                                {Array(Math.floor(item.rating.stars))
                                  .fill()
                                  .map((ratingItem, j) => {
                                    return (
                                      <i
                                        key={j}
                                        className="fa-solid fa-star fa-xs"
                                      ></i>
                                    );
                                  })}
                                {Math.floor(item.rating.stars) ==
                                item.rating.stars ? (
                                  <></>
                                ) : (
                                  <i className="fa-solid fa-star-half-stroke fa-xs"></i>
                                )}

                                {Array(5 - Math.ceil(item.rating.stars))
                                  .fill()
                                  .map((emptyStar, j) => {
                                    return (
                                      <i
                                        class="fa-regular fa-star fa-xs"
                                        key={j}
                                      ></i>
                                    );
                                  })}
                              </div>
                              {/* <div className="numberRate">
                              {item.rating.stars} <span> /5 </span>
                            </div> */}
                            </div>
                            <h5 className="mt-1">${item.priceInCents / 100}</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example ">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link text-black" href="#">
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link text-black" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link text-black" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link text-black" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link text-black" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
