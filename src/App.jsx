import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import SignupDiscount from "./Components/SignupDiscount";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import Shop from "./Pages/Shop";
import Contact from "./Components/Contact";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import axios from "axios";
import jwt from 'jwt-decode'
import ProductDetails from "./Pages/ProductDetails/index";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function App() {
  let navigate = useNavigate();

  function getUserData() {
    let data = {
      name: "",
      email: "",
      phone: "",
      role: ""
    };

    axios
      .get(
        `https://muhammadnruno.pythonanywhere.com/api/users/${localStorage.getItem(
          "id"
        )}`,
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        data["name"] = res.data.first_name + ' ' + res.data.last_name;
        data["email"] = res.data.email;
        data["phone"] = res.data.phone;
        data["role"] = res.data.role;
        localStorage.setItem("user", JSON.stringify(data));
      });
  }

  function logOut() {
    localStorage.clear();
    navigate("/home");
  }

  function ProtectedRoute(props) {
    if (localStorage.getItem("id") === null)
      return navigate("/login");
    else 
      return props.children;
  }

  return (
    <>
        {localStorage.getItem("id") == null ?
          <SignupDiscount/>
          :
          <></>
        }
        <Navbar logOut = {logOut}/>
        <Routes>
          <Route path = "" element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>}/>
          {/* <Route path = "/cart" element = {<ProtectedRoute> <Cart/> </ProtectedRoute>}/> */}
          <Route path = "/profile" element = {<ProtectedRoute> <Profile/> </ProtectedRoute>}/>
          <Route path = "/shop" element = {<Shop/>}/>
          {/* 
          <Route path = "/product" element = {<ProductDetails/>}/>
          <Route path = "/product/:id" element = {<ProductDetails/>}/> */}
          <Route path = "/login" element = {<Login getUserData={getUserData}/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
        <Contact/>
        <Footer/>
    </>
  );
}
