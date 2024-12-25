import React from 'react'
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

function hideMessage(){
  let message = document.querySelector(".message");
  message.style.display = 'none';
}

export default function SignupDiscount() {
  return (
    <div className='message bg-black text-white text-center p-1 fw-light m-0 position-relative'>
        <span className='text-white'>
          Sign up and get 20% off to your first order.
          <Link className = "text-white fw-medium" to = "register"> <u> Sign Up Now </u> </Link>
        </span>
        <i className="x-mark fa-solid fa-x fa-2xs" role = "button" onClick={hideMessage}></i>
    </div>
  )
}
