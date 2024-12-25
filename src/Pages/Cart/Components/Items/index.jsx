import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'

export default function Items({cartContent, setCartContent, shopProducts, setCartCounter}) {
    let data = JSON.parse(localStorage.getItem("cart"));
    const [itemCounters, setItemCounters] = useState(Array(data.length).fill(0))

    return (
        <div>
            <div className="rounded-4 border p-3 h-100">
                {data.map((item, i) => {
                    return (
                        <div key = {i}>
                            <div className="cartItemContainer card mb-3 border-0 h-100">
                                <div className="row g-0 h-100">
                                    <div className="col-md-3 h-100">
                                        <img src={shopProducts[data.id].image ? shopProducts[data.id].image : require("../../../../Images/image-placeholder.png")} className="h-100 w-100 img-fluid rounded-start rounded-2" alt="..."/>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <h5 className="card-title">{shopProducts[data.id].name}</h5>
                                                    <div className="trashContainer px-2 py-1 pb-1 rounded-1" role = "button">
                                                        <i className="trash fa-solid fa-trash-can fa-sm"></i>
                                                    </div>
                                                </div>
                                                <p className="card-text m-0">Size: <span className='fw-normal'>Large</span></p>
                                                <p className="card-text">Color: <span className='fw-normal'>White</span></p>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h4 className="card-title fw-bold">${(shopProducts[data.id].priceInCents) / 100}</h4>
                                                <div className='updateItemContainer d-flex justify-content-between align-items-center rounded-5'>
                                                    <div role = "button" onClick={() => {
                                                        let counters = [...itemCounters]
                                                        counters[data.id] = Math.max(1, counters[data.id] - 1)
                                                        setItemCounters(counters)
                                                    }}><i className="fa-solid fa-minus fa-sm mx-2"></i></div>
                                                    <div>{itemCounters[data.id]}</div>
                                                    <div role = "button" onClick={() => {
                                                        let counters = [...itemCounters]
                                                        counters[data.id] = counters[data.id] + 1
                                                        setItemCounters(counters)
                                                    }}><i className="fa-solid fa-plus fa-sm mx-2"></i></div>
                                                </div>
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
