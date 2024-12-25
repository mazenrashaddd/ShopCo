import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product({ shopProducts, cartContent, cartCounter, setCartCounter }) {
  const [itemCounter, setItemCounter] = useState(1);
  const productID = useParams();

  function addItemToCart(){
    let cart = [...cartContent];
    let data = {
      id: productID.id,
      quantity: itemCounter
    }

    setItemCounter(1);
    setCartCounter(cartCounter + 1)
    cart.push(data);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className="row">
      <div className="col-md-2 container-fluid">
        <div className="row">
          <div className="col-md-12 col-4  mt-2">
            <img
              className="w-100 rounded-4 "
              src={
                shopProducts[productID.id].image
                  ? shopProducts[productID.id].image
                  : require("../../../Images/image-placeholder.png")
              }
              alt=""
            />
          </div>
          <div className="col-md-12 col-4  mt-2">
            <img
              className="w-100 rounded-4 "
              src={
                shopProducts[productID.id].image
                  ? shopProducts[productID.id].image
                  : require("../../../Images/image-placeholder.png")
              }
              alt=""
            />
          </div>
          <div className="col-md-12 col-4 mt-2">
            <img
              className="w-100 rounded-4 "
              src={
                shopProducts[productID.id].image
                  ? shopProducts[productID.id].image
                  : require("../../../Images/image-placeholder.png")
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <img
          className="w-100 rounded-4 mt-2"
          src={
            shopProducts[productID.id].image
              ? shopProducts[productID.id].image
              : require("../../../Images/image-placeholder.png")
          }
          alt=""
        />
      </div>
      <div className="col-md-5">
        <h4 className="p-shop mt-5 fw-bolder text-black">
          {shopProducts[productID.id].name}
        </h4>

        <div className="starRate mb-2">
          {Array(Math.floor(shopProducts[productID.id].rating.stars))
            .fill()
            .map((ratingItem, j) => {
              return <i key={j} className="fa-solid fa-star fa-xs"></i>;
            })}
          {Math.floor(shopProducts[productID.id].rating.stars) ==
          shopProducts[productID.id].rating.stars ? (
            <></>
          ) : (
            <i className="fa-solid fa-star-half-stroke fa-xs"></i>
          )}

          {Array(5 - Math.ceil(shopProducts[productID.id].rating.stars))
            .fill()
            .map((emptyStar, j) => {
              return <i class="fa-regular fa-star fa-xs" key={j}></i>;
            })}
        </div>

        <div>
          <h5>${shopProducts[productID.id].priceInCents / 100}</h5>
        </div>
        <p>{shopProducts[productID.id].description}</p>
        <hr />
        <p className="fs-6">Select Colors</p>
        <div className=" d-flex">
          <div className="roundcircle me-2  bg-black" role="button"></div>
          <div className="roundcircle me-2  bg-secondary" role="button"></div>
          <div className="roundcircle me-2  bg-info" role="button"></div>
        </div>
        <hr />
        <div className="">
          <h5>Choose Size</h5>

          <input
            class="btn me-2 rounded-4 color_card"
            type="button"
            value="Small"
          />
          <input
            class="btn me-2 rounded-4 color_card"
            type="button"
            value="Medium"
          />
          <input
            class="btn me-2 rounded-4 color_card"
            type="button"
            value="Large
                "
          />
          <input
            class="btn me-2 rounded-4 color_card"
            type="button"
            value="X-Large
                "
          />
          <hr />
          <div className=" d-flex justify-content-between ">
            <div className="updateItemContainer d-flex py-4 px-4 justify-content-between align-items-center rounded-5">
              <div
                role="button"
                onClick={() => setItemCounter(Math.max(1, itemCounter - 1))}
              >
                <i className="fa-solid fa-minus fa-sm mx-2"></i>
              </div>
              <div>{itemCounter}</div>
              <div
                role="button"
                onClick={() => setItemCounter(itemCounter + 1)}
              >
                <i className="fa-solid fa-plus fa-sm mx-2"></i>
              </div>
            </div>
            <input
              className="btn me-4 rounded-4 bg-black text-white rounded-5 px-5"
              type="button"
              value="Add to Cart"
              onClick={addItemToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
