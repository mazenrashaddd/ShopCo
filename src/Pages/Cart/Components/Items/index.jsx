import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Items({cartContent, setCartContent, shopProducts, cartCounter, setCartCounter, totalPrice, setTotalPrice}) {
    let data = JSON.parse(localStorage.getItem("cart"));
    let navigate = useNavigate();

    function deleteFromCart(i){
        localStorage.setItem("price", Math.max(0, totalPrice - (shopProducts[Number(data[i].id)].priceInCents) / 100))
        setCartCounter(cartCounter - 1)
        data.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(data));
        navigate("/cart")
    }

    return (
        <div>
            <div className="rounded-4 border p-3 h-100">
                {data.map((item, i) => {
                    return (
                        <div className = "cartItemContainer" key = {i}>
                            <div className="card mb-3 border-0 h-100">
                                <div className="row g-0 h-100">
                                    <div className="col-md-3 h-100 gy-3">
                                        <img src={shopProducts[Number(item.id)].image ? shopProducts[Number(item.id)].image : require("../../../../Images/image-placeholder.png")} className="h-100 w-100 img-fluid rounded-start rounded-2" alt="..."/>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <h5 className="card-title">{shopProducts[Number(item.id)].name}</h5>
                                                    <div className="trashContainer px-2 py-1 pb-1 rounded-1" role = "button" onClick={() => {deleteFromCart(i)}}>
                                                        <i className="trash fa-solid fa-trash-can fa-sm"></i>
                                                    </div>
                                                </div>
                                                <p className="card-text m-0">Size: <span className='fw-normal'>Large</span></p>
                                                <p className="card-text">Color: <span className='fw-normal'>White</span></p>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h4 className="card-title fw-bold">${(shopProducts[Number(item.id)].priceInCents) / 100}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
