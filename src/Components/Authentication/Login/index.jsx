import React, { useState } from 'react'
import "./style.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login({getUserData}) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState([]);
  let navigate = useNavigate();

  function getLoginData(e){
    let data = {...loginData};
    data[e.target.name] = e.target.value;
    setLoginData(data);
  }

  function handlerSubmit(e){
    e.preventDefault();
    
    axios.post("https://muhammadnruno.pythonanywhere.com/api/authentication/login/", loginData)
    .then((res) => {
      localStorage.setItem("id", res.data.user.pk);
      localStorage.setItem("accessToken", res.data.access_token);
      getUserData();
      navigate("/home");
    }).catch((err) => {
      if (err.response.data.non_field_errors)
        setErrorMessage(err.response.data.non_field_errors);
      else if (err.response.data.email)
        setErrorMessage(err.response.data.email);
      else
        setErrorMessage(err.response.data.password);
    });
  }

  return (
    <div className='login formContainer container pt-4 pb-1 my-5 rounded-3 bg-white'>
        <h1 className='heading authenticationHeader text-center'>LOGIN</h1>
        {errorMessage.length ? errorMessage.map((err) => {
          return(<h6 className="alert alert-danger mt-3"> {err} </h6>)})
        : <></>}
        <form className='my-4' onSubmit={handlerSubmit}>
          <div className="position-relative d-flex justify-content-center">
            <input id = "email" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "email" name = "email" placeholder='Enter your email address' onChange={getLoginData}/>
            <i className="inputIcon fa-solid fa-envelope fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center mb-2">
            <input id = "password" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "password" name = "password" placeholder='Enter your password' onChange={getLoginData}/>
            <i className="inputIcon fa-solid fa-lock fa-2xs"></i>
          </div>
          <div className="loginLink text-center mb-2"> Don't have an account? <Link to = "/register" className='fw-bold'> <u>Register</u> </Link> </div>
          <div className="loginLink text-center mb-3"> Forgot your password? <Link to = "/login" className='fw-bold'> <u>Reset your password</u> </Link> </div>
          <div className="d-flex justify-content-center">
            <button type = "submit" className="authenticationButton my-3 btn btn-light rounded-4 shadow"> Login </button>
          </div>
        </form>
    </div>
  )
}
