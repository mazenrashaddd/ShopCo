import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Profile({ shopProducts, setShopProducts }) {
  let navigate = useNavigate();

  const [productData, setProductData] = useState({
    id: "",
    image: "",
    name: "",
    rating: { stars: "", count: "" },
    priceInCents: "",
    keywords: [],
    category: "",
    description: "",
  });

  const [changedUserData, setChangedUserData] = useState({
    first_name: JSON.parse(localStorage.getItem("user")).first_name,
    last_name: JSON.parse(localStorage.getItem("user")).last_name,
    phone: JSON.parse(localStorage.getItem("user")).phone,
    email: JSON.parse(localStorage.getItem("user")).email,
    role: JSON.parse(localStorage.getItem("user")).role,
  });

  function getProductData(e) {
    let data = { ...productData };
    data[e.target.name] = e.target.value;
    setProductData(data);
  }

  function saveProductData(e) {
    e.preventDefault();
    let data = [...shopProducts];
    data.push(productData);
    setShopProducts(data);
  }

  function getUpdatedUserData(e) {
    let data = { ...changedUserData };
    data[e.target.name] = e.target.value;
    setChangedUserData(data);
  }

  function saveUpdatedUserData(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(changedUserData));
    navigate("/profile");
  }

  function deleteProduct(i) {
    let data = [...shopProducts];
    data.splice(i, 1);
    setShopProducts(data);
  }

  return (
    <div className="profile container my-5">
      <div className="bg-light p-3 rounded-4">
        <h1 className="heading profileHeader mb-4">Profile</h1>
        <div className="d-flex align-items-center mb-5">
          <div className="profileImageContainer rounded-circle border border-black border-2 position-relative">
            <div
              className="profileImageIconContainer rounded-circle position-absolute"
              role="button"
            >
              <i className="fa-solid fa-camera fa-2xs"></i>
            </div>
          </div>
          <div>
            <p className="m-0 ms-3 pt-4">
              {JSON.parse(localStorage.getItem("user")).first_name +
                " " +
                JSON.parse(localStorage.getItem("user")).last_name}
            </p>
            <h4 className="ms-3">
              {JSON.parse(localStorage.getItem("user")).role == "Staff"
                ? "Store Manager"
                : "Customer"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="f-flex col-12 ps-0 mb-3 col-md-3 border-3 cSideMenu">
            <div>
              <ul>
                <li
                  className="mb-2 p-2 rounded-2"
                  role="button"
                  onClick={() => {
                    let selected = document.querySelector(".editProfile");
                    let unselected = document.querySelector(
                      ".passwordAndSecurity"
                    );
                    let unselectedTwo = document.querySelector(".inventory");

                    selected.style.display = "block";
                    unselected.style.display = "none";
                    unselectedTwo.style.display = "none";
                  }}
                >
                  <div>Edit Profile</div>
                </li>
                <li
                  className="mb-2 p-2 rounded-2"
                  role="button"
                  onClick={() => {
                    let selected = document.querySelector(
                      ".passwordAndSecurity"
                    );
                    let unselected = document.querySelector(".editProfile");
                    let unselectedTwo = document.querySelector(".inventory");

                    selected.style.display = "block";
                    unselected.style.display = "none";
                    unselectedTwo.style.display = "none";
                  }}
                >
                  <div>Password & Security</div>
                </li>
                {JSON.parse(localStorage.getItem("user")).role == "Staff" ? (
                  <li
                    className="mb-2 p-2 rounded-2"
                    role="button"
                    onClick={() => {
                      let selected = document.querySelector(".inventory");
                      let selectedTwo = document.querySelector(".showProducts");
                      let unselected = document.querySelector(".editProfile");
                      let unselectedTwo = document.querySelector(
                        ".passwordAndSecurity"
                      );
                      let unselectedFour =
                        document.querySelector(".addProductForm");

                      selected.style.display = "block";
                      selectedTwo.style.display = "flex";
                      unselected.style.display = "none";
                      unselectedTwo.style.display = "none";
                      unselectedFour.style.display = "none";
                    }}
                  >
                    <div>Inventory</div>
                  </li>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div>
              <div className="editProfile ms-4">
                <form onSubmit={saveUpdatedUserData}>
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <p className="mb-3 mt-4">Personal</p>
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <div className="position-relative">
                        <input
                          id="firstName"
                          className="inputBox shadow form-control mb-3 rounded-5 ps-4 w-100"
                          type="text"
                          name="first_name"
                          placeholder={
                            JSON.parse(localStorage.getItem("user")).first_name
                          }
                          onChange={getUpdatedUserData}
                        />
                        <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                      </div>
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <div className="position-relative">
                        <input
                          id="lastName"
                          className="inputBox shadow form-control mb-3 rounded-5 ps-4 w-100"
                          type="text"
                          name="last_name"
                          placeholder={
                            JSON.parse(localStorage.getItem("user")).last_name
                          }
                          onChange={getUpdatedUserData}
                        />
                        <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <p className="mt-4">Contact</p>
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <div className="position-relative">
                        <input
                          id="email"
                          className="inputBox shadow form-control mb-3 rounded-5 ps-4 w-100"
                          type="email"
                          name="email"
                          placeholder={
                            JSON.parse(localStorage.getItem("user")).email
                          }
                          onChange={getUpdatedUserData}
                        />
                        <i className="profileInputIcon fa-solid fa-envelope fa-2xs"></i>
                      </div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <div className="position-relative">
                        <input
                          id="phone"
                          className="inputBox shadow form-control mb-3 rounded-5 ps-4 w-100"
                          type="text"
                          name="phone"
                          placeholder={
                            JSON.parse(localStorage.getItem("user")).phone
                          }
                          onChange={getUpdatedUserData}
                        />
                        <i className="profileInputIcon fa-solid fa-phone fa-2xs"></i>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row showProducts g-2 mt-2">
                  {shopProducts.map((item, i) => {
                    return (
                      <div key={i} className="col-4">
                        <div
                          className="trashContainer px-2 py-1 pb-1 rounded-1 text-end"
                          role="button"
                          onClick={() => {
                            deleteProduct(i);
                          }}
                        >
                          <i className="trash fa-solid fa-trash-can fa-sm"></i>
                        </div>
                        <Link to={`/product/${i}`}>
                          <div className="card rounded-3">
                            <img
                              src={
                                item.image
                                  ? item.image
                                  : require("../../Images/image-placeholder.png")
                              }
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body bg-transparent">
                              <h5 className="card-title">{item.name}</h5>
                              <h5 className="mt-1">
                                ${item.priceInCents / 100}
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="addProductForm ms-4">
                  <form onSubmit={saveProductData}>
                    <p className="mb-4">Add Product</p>
                    <label htmlFor="name" className="form-label">
                      Product Name
                    </label>
                    <div className="position-relative">
                      <input
                        id="name"
                        className="inputBox shadow form-control mb-4 rounded-5 ps-4"
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        onChange={getProductData}
                      />
                      <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                    </div>
                    <div>
                      <div className="form-floating">
                        <textarea
                          className="form-control mb-3"
                          placeholder="Product Description"
                          id="floatingTextarea2"
                          name="description"
                          onChange={getProductData}
                        ></textarea>
                        <label htmlFor="floatingTextarea2">Description</label>
                      </div>
                    </div>
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <div className="position-relative">
                      <input
                        id="price"
                        className="inputBox shadow form-control mb-3 rounded-5 ps-4"
                        type="number"
                        name="priceInCents"
                        placeholder="Enter product price"
                        onChange={getProductData}
                      />
                      <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                    </div>
                    <label htmlFor="image" className="form-label">
                      Product Image
                    </label>
                    <div className="position-relative">
                      <input
                        id="image"
                        className="inputBox shadow form-control mb-3 rounded-5 ps-4"
                        type="text"
                        name="image"
                        placeholder="Enter product image link"
                        onChange={getProductData}
                      />
                      <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                    </div>
                    <label htmlFor="stock" className="form-label">
                      Category
                    </label>
                    <div className="position-relative">
                      <input
                        id="stock"
                        className="inputBox shadow form-control mb-3 rounded-5 ps-4"
                        type="number"
                        name="category"
                        placeholder="Enter product category"
                        onChange={getProductData}
                      />
                      <i className="profileInputIcon fa-solid fa-user fa-2xs"></i>
                    </div>
                    <button
                      type="submit"
                      className="profileSaveButton btn btn-light rounded-5 shadow mt-3 mb-2"
                    >
                      {" "}
                      Add{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
