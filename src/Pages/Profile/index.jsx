import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Profile({userData, setUserData}) {
  const[productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    stock_quantity: ""
  })

  const [changedUserData, setChangedUserData] = useState({
    first_name: userData.first_name,
    last_name: userData.last_name,
    phone: userData.phone,
    email: userData.email
  })

  const[added, setAdded] = useState(0)
  const[products, setProducts] = useState([])

  function getProductData(e){
    let data = {...productData}
    data[e.target.name] = e.target.value;
    setProductData(data)
  }

  function getUpdatedUserData(e){
    let data = {...changedUserData}
    data[e.target.name] = e.target.value;
    setChangedUserData(data)
  }

  function handlerSubmitUser(e){
    e.preventDefault()

    axios.put(`https://muhammadnruno.pythonanywhere.com/api/users/${localStorage.getItem("id")}`, changedUserData, {
      headers: {
        'Authorization': `JWT ${localStorage.getItem("accessToken")}`
      }
    })
    .then(() => {
      setUserData(changedUserData);
    })
  }

  function handlerSubmitProducts(e){
    e.preventDefault()

    axios.post(`https://muhammadnruno.pythonanywhere.com/api/products/`, productData, {
      headers: {
        'Authorization': `JWT ${localStorage.getItem("accessToken")}`
      }
    })
    .then(() => {
      setAdded(added + 1);
    })
  }

  useEffect(() => {
    axios.get(`https://muhammadnruno.pythonanywhere.com/api/products/`, {
      headers: {
        'Authorization': `JWT ${localStorage.getItem("accessToken")}`
      }
    })
    .then((res) => {
      setProducts(res.data.results)
    })
  }, [])

  useEffect(() => {
    axios.get(`https://muhammadnruno.pythonanywhere.com/api/products/`, {
      headers: {
        'Authorization': `JWT ${localStorage.getItem("accessToken")}`
      }
    })
    .then((res) => {
      setProducts(res.data.results)
    })
  }, [added])

  return (
    <div className='profile container my-5'>
      <div className="bg-light p-3 rounded-4">
        <h1 className='heading profileHeader mb-4'>Profile</h1>
        <div className="d-flex align-items-center mb-5">
          <div className="profileImageContainer rounded-circle border border-black border-2 position-relative">
            <div className="profileImageIconContainer rounded-circle position-absolute" role = "button">
              <i className="fa-solid fa-camera fa-2xs"></i>
            </div>
          </div>
          <div>
            <p className='m-0 ms-3 pt-4'>{userData.first_name + ' ' + userData.last_name}</p>
            <h4 className='ms-3'>{localStorage.getItem("role") == "Staff" ? "Store Manager" : "Customer"}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3 border-end border-3">
            <div>
              <ul>
                  <li className='mb-2 p-2 rounded-2' role = "button" onClick={() => {
                    let selected = document.querySelector(".editProfile");
                    let unselected = document.querySelector(".passwordAndSecurity");
                    let unselectedTwo = document.querySelector(".inventory")
                    let unselectedThree = document.querySelector(".orders")
                    
                    selected.style.display = 'block';
                    unselected.style.display = 'none';
                    unselectedTwo.style.display = 'none';
                    unselectedThree.style.display = 'none';
                  }}>
                    <div>
                      Edit Profile
                    </div>
                  </li>
                  <li className='mb-2 p-2 rounded-2' role = "button" onClick={() => {
                    let selected = document.querySelector(".passwordAndSecurity");
                    let unselected = document.querySelector(".editProfile");
                    let unselectedTwo = document.querySelector(".inventory")
                    let unselectedThree = document.querySelector(".orders")
                    
                    selected.style.display = 'block';
                    unselected.style.display = 'none';
                    unselectedTwo.style.display = 'none';
                    unselectedThree.style.display = 'none';
                  }}>
                    <div>
                      Password & Security
                    </div>
                  </li>
                  {localStorage.getItem("role") == "Staff" ?
                    <li className='mb-2 p-2 rounded-2' role = "button" onClick={() => {
                      let selected = document.querySelector(".inventory");
                      let selectedTwo = document.querySelector(".showProducts")
                      let unselected = document.querySelector(".editProfile");
                      let unselectedTwo = document.querySelector(".passwordAndSecurity")
                      let unselectedThree = document.querySelector(".orders")
                      let unselectedFour = document.querySelector(".addProductForm")
                      
                      selected.style.display = 'block';
                      selectedTwo.style.display = 'block';
                      unselected.style.display = 'none';
                      unselectedTwo.style.display = 'none';
                      unselectedThree.style.display = 'none';
                      unselectedFour.style.display = 'none';
                    }}>
                      <div>
                        Inventory
                      </div>
                    </li>
                    :
                    <></>
                  }
                  <li className='mb-2 p-2 rounded-2' role = "button" onClick={() => {
                    let selected = document.querySelector(".orders");
                    let unselected = document.querySelector(".editProfile");
                    let unselectedTwo = document.querySelector(".inventory")
                    let unselectedThree = document.querySelector(".passwordAndSecurity")
                      
                    selected.style.display = 'block';
                    unselected.style.display = 'none';
                    unselectedTwo.style.display = 'none';
                    unselectedThree.style.display = 'none';
                  }}>
                    <div>
                      Orders
                    </div>
                  </li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div>
                <div className="editProfile ms-4">
                  <form onSubmit={handlerSubmitUser}>
                    <div className="row">
                      <div className="col-6">
                        <p className='mb-4'>Personal</p>
                        <label htmlFor='firstName' className='form-label'>First Name</label>
                        <div className="position-relative">
                          <input id = "firstName" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "text" value = {userData.first_name} name = "first_name" placeholder='Enter your first name' onChange={getUpdatedUserData}/>
                          <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                        </div>
                        <label htmlFor='lastName' className='form-label'>Last Name</label>
                        <div className="position-relative">
                          <input id = "lastName" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "text" value = {userData.last_name} name = "last_name" placeholder='Enter your last name' onChange={getUpdatedUserData}/>
                          <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                        </div>
                      </div>
                      <div className="col-6">
                      <p className='mb-4'>Contact</p>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <div className="position-relative">
                          <input id = "email" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "email" value = {userData.email} name = "email" placeholder='Enter your email address' onChange={getUpdatedUserData}/>
                          <i className="profileInputIcon fa-solid fa-envelope fa-2xs"></i>
                        </div>
                        <label htmlFor='phone' className='form-label'>Phone Number</label>
                        <div className="position-relative">
                          <input id = "phone" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "text" value = {userData.phone} name = "phone" placeholder='Enter your phone number' onChange={getUpdatedUserData}/>
                          <i className="profileInputIcon fa-solid fa-phone fa-2xs"></i>
                        </div>
                      </div>
                    </div>
                    <button type = "submit" className="profileSaveButton btn btn-light rounded-5 shadow mt-3 mb-2"> Save </button>
                  </form>
                </div>
                <div className="passwordAndSecurity ms-4">
                  <form>
                    <p className='mb-4'>Change Password</p>
                    <label htmlFor='current' className='form-label'>Current Password</label>
                    <div className="position-relative">
                      <input id = "current" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" placeholder='Enter your current password'/>
                      <i className="profileInputIcon fa-solid fa-lock fa-2xs"></i>
                    </div>
                    <label htmlFor='new' className='form-label'>New Password</label>
                    <div className="position-relative">
                      <input id = "new" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" placeholder='Enter your new password'/>
                      <i className="profileInputIcon fa-solid fa-lock fa-2xs"></i>
                    </div>
                    <label htmlFor='confirmNew' className='form-label'>Confirm Password</label>
                    <div className="position-relative">
                      <input id = "confirmNew" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" placeholder='Confirm your new password'/>
                      <i className="profileInputIcon fa-solid fa-lock fa-2xs"></i>
                    </div>
                    <button type = "submit" className="profileSaveButton btn btn-light rounded-5 shadow mt-3 mb-2"> Save </button>
                  </form>
                </div>
                <div className="inventory ms-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-4'>Inventory</p>
                    <div className='pb-2'>
                      <button type = "submit" className="addProduct btn btn-light rounded-5 shadow mb-4" onClick={() => {
                        let selected = document.querySelector(".addProductForm")
                        let unselected = document.querySelector(".showProducts")
                        
                        selected.style.display = 'block';
                        unselected.style.display = 'none';
                      }}> Add Product </button>
                    </div>
                  </div>
                  
                    <div className="showProducts row g-2 mt-2">
                      {products.map((item, i) => {
                        return (
                            <div key = {i} className="col-4">
                              <Link to = {`/product/${item.id}`}>
                                <div className="card border-0 rounded-3">
                                    <img src={item.image ? item.image : require('../../Images/image-placeholder.png')} className="card-img-top" alt="..."/>
                                    <div className="card-body bg-transparent">
                                      <h5 className="card-title">{item.name}</h5>
                                      <h5 className='mt-1'>${item.price}</h5>
                                    </div>
                                </div>
                              </Link>
                            </div>
                        )
                      })}
                    </div>
                  <div className="addProductForm ms-4">
                    <form onSubmit={handlerSubmitProducts}>
                      <p className='mb-4'>Add Product</p>
                      <label htmlFor='name' className='form-label'>Product Name</label>
                      <div className="position-relative">
                        <input id = "name" className='inputBox shadow form-control mb-4 rounded-5 ps-4' type = "text" name = "name" placeholder="Enter product name" onChange={getProductData}/>
                        <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                      </div>
                      <div>
                        <div className="form-floating">
                          <textarea className="form-control mb-3" placeholder="Product Description" id="floatingTextarea2" name = "description" onChange={getProductData}></textarea>
                          <label htmlFor="floatingTextarea2">Description</label>
                        </div>
                      </div>
                      <label htmlFor='price' className='form-label'>Price</label>
                      <div className="position-relative">
                        <input id = "price" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "number" name = "price" placeholder='Enter product price' onChange={getProductData}/>
                        <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                      </div>
                      <label htmlFor='image' className='form-label'>Product Image</label>
                      <div className="position-relative">
                        <input id = "image" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "text" name = "image" placeholder='Enter product image link' onChange={getProductData}/>
                        <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                      </div>
                      <label htmlFor='stock' className='form-label'>Stock Quantity</label>
                      <div className="position-relative">
                        <input id = "stock" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "number" name = "stock_quantity" placeholder='Enter stock quantity' onChange={getProductData}/>
                        <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                      </div>
                      <button type = "submit" className="profileSaveButton btn btn-light rounded-5 shadow mt-3 mb-2"> Add </button>
                    </form>
                  </div>
                </div>
                <div className="orders ms-4">
                  <p className='mb-4'>Orders</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
