import React, { useState } from 'react'
import "./style.css"
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi';
import axios from 'axios';

export default function Register() {
  const [registrationData, setRegistrationData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrorState, setValidationErrorState] = useState(false);
  let navigate = useNavigate();

  function getRegistrationData(e){
    let data = {...registrationData};
    data[e.target.name] = e.target.value;
    setRegistrationData(data);
  }

  function validateCredentials(){
    const schema = Joi.object({
        first_name: Joi.string()
            .alphanum()
            .min(2)
            .max(30)
            .required(),

        last_name: Joi.string()
            .alphanum()
            .min(2)
            .max(30)
            .required(),

        phone: Joi.string()
            .pattern(new RegExp('^[010|011|012][0-9]{8}')),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
            .required(),
    })

    let data = {...registrationData};

    return schema.validate(data, {abortEarly: false});
  }

  function handlerSubmit(e){
    e.preventDefault();

    let validationResult = validateCredentials();

    if ('error' in validationResult){
      console.log(validationResult.error.details)
      for (let i = 0; i < validationResult.error.details.length; ++i){
        if (validationResult.error.details[i].path[0] == "phone")
          validationResult.error.details[i].message = 'phone number must start with 010 or 011 or 012 and contain 11 digits';
      }

      setErrorMessage(validationResult.error.details);
      setValidationErrorState(true);
    }
    else{
      axios.post("https://muhammadnruno.pythonanywhere.com/api/authentication/registration/", registrationData)
      .then((res) => {
        navigate("/login");
        setValidationErrorState(false);
      }).catch((err) => {
        setErrorMessage(err.response.data);
        setValidationErrorState(false);
      });
    }
  }

  return (
    <div className='formContainer container pt-4 pb-1 my-5 rounded-3 bg-white'>
        <h1 className='heading registerHeader text-center'>REGISTER</h1>
        {validationErrorState ? errorMessage.map((err, i) => {
        return (<h1 key = {i} className="error alert alert-danger h6 mt-3"> {err.message} </h1>)
        }) : errorMessage.length ? <h1 className="alert alert-danger h6 mt-3"> {errorMessage} </h1> : <></>}
        <form className='my-4' onSubmit={handlerSubmit}>
          <div className="position-relative d-flex justify-content-center">
            <input id = "firstName" className='inputBox shadow form-control mb-3 rounded-5 ps-4' name = "first_name" type = "text" placeholder='Enter your first name' onChange={getRegistrationData}/>
            <i className="inputIcon fa-solid fa-user fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center">
            <input id = "lastName" className='inputBox shadow form-control mb-3 rounded-5 ps-4' name = "last_name" type = "text" placeholder='Enter your last name' onChange={getRegistrationData}/>
            <i className="inputIcon fa-solid fa-user fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center">
            <input id = "phone" className='inputBox shadow form-control mb-3 rounded-5 ps-4' name = "phone" type = "tel" placeholder='Enter your phone number' onChange={getRegistrationData}/>
            <i className="inputIcon fa-solid fa-phone fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center">
            <input id = "email" className='inputBox shadow form-control mb-3 rounded-5 ps-4' name = "email" type = "email" placeholder='Enter your email address' onChange={getRegistrationData}/>
            <i className="inputIcon fa-solid fa-envelope fa-2xs"></i>
          </div>
          <div className="position-relative d-flex justify-content-center">
            <input id = "password" className='inputBox shadow form-control mb-3 rounded-5 ps-4' name = "password" type = "password" placeholder='Enter your password' onChange={getRegistrationData}/>
            <i className="inputIcon fa-solid fa-lock fa-2xs"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className='d-flex align-items-center'>
              <input id = "terms" type="checkbox" className="form-check-input mb-1"/>
              <label htmlFor = "terms" className="form-check-label ms-2"> I agree to the terms & conditions </label>
            </div>
            <div className="loginLink text-center"> Already have an account? <Link to = "/login" className='fw-bold'> <u>Login</u> </Link> </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type = "submit" className="authenticationButton my-3 btn btn-light rounded-4 shadow"> Register </button>
          </div>
        </form>
    </div>
  )
}
