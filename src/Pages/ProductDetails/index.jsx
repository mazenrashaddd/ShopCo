import React, { useEffect, useState } from "react";
import "./style.css";
import Product from "../ProductDetails/Components/Product";
import NewArrivals from "./../Home/Components/NewArrivals/index";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails({ shopProducts, cartContent, setCartContent, cartCounter, setCartCounter, totalPrice, setTotalPrice }) {
  const [itemCounter, setItemCounter] = useState(1);
  const productID = useParams();

  return (
    <>
      <div className="container bg-white">
        <Product shopProducts = {shopProducts} cartContent = {cartContent} setCartContent = {setCartContent} cartCounter = {cartCounter} setCartCounter = {setCartCounter} totalPrice = {totalPrice} setTotalPrice = {setTotalPrice}/>
        <div className="ProductDetails m-3">
          <h3 className=" mt-3">Product Details</h3>
          <hr />
          <h4 className="my-4">Product specifications</h4>
          <div className="d-flex justify-content-between">
            <div className="w-50">
              <p className="">Material composition</p>
              <p className="pspcf">Care instructions</p>
              <p className="pspcf ">Fit type</p>
              <p className="pspcf">Pattern</p>
            </div>
            <div className="w-50">
              <p className="">100% Cotton</p>
              <hr />
              <p>Machine wash warm, tumble dry</p>
              <hr />
              <p>Classic Fit</p>
              <hr />
              <p>Solid</p>
              <hr />
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="row p-3 gy-4">
            <h4 className="fw-bolder">
              All Reviews <span className="fs-6"> (451)</span>
            </h4>
            <div className="col-md-6">
              <div className=" p-3 border border-1 border-black rounded-4">
                <div className="starRate mb-2 ">
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                </div>
                <h4 className="fw-bolder fs-4">
                  Alex K.{" "}
                  <i class="fa-solid fs-6 fa-check bg-success p-1 fw-bolder rounded-5 text-white"></i>
                </h4>
                <p className="fs-6 text-dark">
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
                <p>Posted on August 14, 2023</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" p-3 border border-1 border-black rounded-4">
                <div className="starRate mb-2 ">
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                </div>
                <h4 className="fw-bolder fs-4">
                  Alex K.{" "}
                  <i class="fa-solid fs-6 fa-check bg-success p-1 fw-bolder rounded-5 text-white"></i>
                </h4>
                <p className="fs-6 text-dark">
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
                <p>Posted on August 14, 2023</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" p-3 border border-1 border-black rounded-4">
                <div className="starRate mb-2 ">
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                </div>
                <h4 className="fw-bolder fs-4">
                  Alex K.{" "}
                  <i class="fa-solid fs-6 fa-check bg-success p-1 fw-bolder rounded-5 text-white"></i>
                </h4>
                <p className="fs-6 text-dark">
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
                <p>Posted on August 14, 2023</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" p-3 border border-1 border-black rounded-4">
                <div className="starRate mb-2 ">
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                </div>
                <h4 className="fw-bolder fs-4">
                  Alex K.{" "}
                  <i class="fa-solid fs-6 fa-check bg-success p-1 fw-bolder rounded-5 text-white"></i>
                </h4>
                <p className="fs-6 text-dark">
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
                <p>Posted on August 14, 2023</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" p-3 border border-1 border-black rounded-4">
                <div className="starRate mb-2 ">
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                </div>
                <h4 className="fw-bolder fs-4">
                  Alex K.{" "}
                  <i class="fa-solid fs-6 fa-check bg-success p-1 fw-bolder rounded-5 text-white"></i>
                </h4>
                <p className="fs-6 text-dark">
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
                <p>Posted on August 14, 2023</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" p-3 border border-1 border-black rounded-4">
                <div className="starRate mb-2 ">
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                </div>
                <h4 className="fw-bolder fs-4">
                  Alex K.{" "}
                  <i class="fa-solid fs-6 fa-check bg-success p-1 fw-bolder rounded-5 text-white"></i>
                </h4>
                <p className="fs-6 text-dark">
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
                <p>Posted on August 14, 2023</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" p-3 border border-1 border-black rounded-4">
                <div className="starRate mb-2 ">
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                </div>
                <h4 className="fw-bolder fs-4">
                  Alex K.{" "}
                  <i class="fa-solid fs-6 fa-check bg-success p-1 fw-bolder rounded-5 text-white"></i>
                </h4>
                <p className="fs-6 text-dark">
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
                <p>Posted on August 14, 2023</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" p-3 border border-1 border-black rounded-4">
                <div className="starRate mb-2 ">
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                  <i className="fa-solid me-2 fa-star fa-xs"></i>
                </div>
                <h4 className="fw-bolder fs-4">
                  Alex K.{" "}
                  <i class="fa-solid fs-6 fa-check bg-success p-1 fw-bolder rounded-5 text-white"></i>
                </h4>
                <p className="fs-6 text-dark">
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
                <p>Posted on August 14, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <NewArrivals />
        </div> */}
      </div>
    </>
  );
}
