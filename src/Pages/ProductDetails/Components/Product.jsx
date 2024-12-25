import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function Product({productDetails, cartContent}) {
  const [itemCounter, setItemCounter] = useState(1)
  const [cartItem, setCartItem] = useState({
    product: {
      id: "",
      name: "",
      description: "",
      price: "",
      image: "",
      stock_quantity: ""
    },
    quantity: "",
    total_price: ""
  })

  function addItemToCart(){
    let data = {...cartItem};
    data.product = productDetails;
    data.quantity = itemCounter;
    data.total_price = itemCounter * productDetails.price;
    setCartItem(data);
    cartContent.items.push(data);
    cartContent.total_cost += data.total_price;
  }

  return (
    <div className="row">
      <div className="col-md-2 container-fluid">
        <div className="row">
          <div className="col-md-12 col-4  mt-2">
            <img
              className="w-100 rounded-4 "
              src={productDetails.image ? productDetails.image : require("../../../Images/image-placeholder.png")}
              alt=""
            />
          </div>
          <div className="col-md-12 col-4  mt-2">
            <img
              className="w-100 rounded-4 "
              src={productDetails.image ? productDetails.image : require("../../../Images/image-placeholder.png")}
              alt=""
            />
          </div>
          <div className="col-md-12 col-4 mt-2">
            <img
              className="w-100 rounded-4 "
              src={productDetails.image ? productDetails.image : require("../../../Images/image-placeholder.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <img
          className="w-100 rounded-4 mt-2"
          src={productDetails.image ? productDetails.image : require("../../../Images/image-placeholder.png")}
          alt=""
        />
      </div>
      <div className="col-md-5">
        <h4 className="p-shop mt-5 fw-bolder text-black">
          {productDetails.name}
        </h4>

        <div className="starRate mb-2">
          <i className="fa-solid me-2 fa-star fa-xs"></i>
          <i className="fa-solid me-2 fa-star fa-xs"></i>
          <i className="fa-solid me-2 fa-star fa-xs"></i>
          <i className="fa-solid me-2 fa-star fa-xs"></i>
          <i className="fa-solid fa-star-half fa-xs"></i>
          <span className="ms-2">4.5/5</span>
        </div>

        <div>
          <h5>${productDetails.price}</h5>
        </div>
        <p>
          {productDetails.description}
        </p>
        <hr />
        <p className="fs-6">Select Colors</p>
        <div className=" d-flex">
          <div className="roundcircle me-2  bg-black" role = "button"></div>
          <div className="roundcircle me-2  bg-secondary" role = "button"></div>
          <div className="roundcircle me-2  bg-info" role = "button"></div>
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
