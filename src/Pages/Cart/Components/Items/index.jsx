import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'

export default function Items({cartContent, setCartContent}) {
    const [itemCounter, setItemCounter] = useState(1);

    function deleteItem(id){
        let data = {
            id: cartContent.id,
            items:[],
            total_cost: cartContent.total_cost
        };

        for (let i = 0; i < cartContent.items.length; ++i){
            if (cartContent.items[i].id != id)
                data.items.push(cartContent.items[i]);
        }
        
        setCartContent(data);
    }

    return (
        <div>
            <div className="rounded-4 border p-3 h-100">
                {cartContent.items.map((item, i) => {
                    return (
                        <div key = {i}>
                            <div className="cartItemContainer card mb-3 border-0 h-100">
                                <div className="row g-0 h-100">
                                    <div className="col-md-3 h-100">
                                        <img src={item.product.image ? item.product.image : require("../../../../Images/image-placeholder.png")} className="h-100 w-100 img-fluid rounded-start rounded-2" alt="..."/>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <h5 className="card-title">{item.product.name}</h5>
                                                    <div className="trashContainer px-2 py-1 pb-1 rounded-1" role = "button" onClick={deleteItem(item.product.id)}>
                                                        <i className="trash fa-solid fa-trash-can fa-sm"></i>
                                                    </div>
                                                </div>
                                                <p className="card-text m-0">Size: <span className='fw-normal'>Large</span></p>
                                                <p className="card-text">Color: <span className='fw-normal'>White</span></p>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h4 className="card-title fw-bold">${item.product.price}</h4>
                                                <div className='updateItemContainer d-flex justify-content-between align-items-center rounded-5'>
                                                    <div role = "button" onClick={() => setItemCounter(Math.max(1, itemCounter - 1))}><i className="fa-solid fa-minus fa-sm mx-2"></i></div>
                                                    <div>{itemCounter}</div>
                                                    <div role = "button" onClick={() => setItemCounter(itemCounter + 1)}><i className="fa-solid fa-plus fa-sm mx-2"></i></div>
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
