import React from "react";
import "./style.css";

export default function Contact() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="bg-black rounded-4 px-5 pt-5 pb-4">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="d-flex align-items-center">
              <h1 className="heading subscribeHeader text-white">
                STAY UP TO DATE ABOUT LATEST OFFERS
              </h1>
            </div>
          </div>
          <div className="col-md-5 ">
            <div>
              <div className="subscribeContainer">
                <input
                  className="subscribeInput form-control rounded-5"
                  type="email"
                  placeholder="Enter your email address"
                />
                <i className="subscribeIcon fa-solid fa-envelope fa-sm"></i>
              </div>
              <button className="subscribeButton btn btn-primary btn-light text-dark rounded-5 py-2 mt-2 mb-4">
                {" "}
                Subscribe to Newsletter{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
