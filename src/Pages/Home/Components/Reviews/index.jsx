import React, { use, useEffect, useState } from "react";
import "./style.css";
import { staticReviews } from "../../../../Data/reviews.js";
import { useNavigate } from "react-router-dom";

export default function Reviews() {
  let navigate = useNavigate();
  const [reviews, setReviews] = useState((localStorage.getItem("reviews") == null ? staticReviews : JSON.parse(localStorage.getItem("reviews"))));
  const [slider, setSlider] = useState([]);
  const [indexPosition, setIndexPosition] = useState(0);
  const [reviewData, setReviewData] = useState({
    name: "",
    description: "",
    rate: ""
  })

  function updateSlider(){
    let data = [];

    for (let i = 0; i < 4; ++i)
      data.push(reviews[(indexPosition + i) % reviews.length]);

    setSlider(data);
  }

  function getReviewData(e){
    let data = {...reviewData}
    data[e.target.name] = e.target.value;
    data["name"] = JSON.parse(localStorage.getItem("user")).first_name + ' ' + JSON.parse(localStorage.getItem("user")).last_name;
    setReviewData(data)
  }

  function addReview(e){
    e.preventDefault();
    let data = [...reviews]
    data.push(reviewData)
    setReviews(data)
    localStorage.setItem("reviews", JSON.stringify(data))
    navigate("/home");
  }

  useEffect(() => {
    updateSlider();
  }, [reviews, indexPosition])

  return (
    <div className="mb-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="heading reviewHeading my-5"> OUR HAPPY CUSTOMERS </h1>
          <div className="d-flex justify-content-between align-items-center">
            <div className="slideIcon h-50 px-2 py-1 rounded-1">
              <i className="fa-solid fa-arrow-left fa-lg" role="button" onClick={() => {
                setIndexPosition(((indexPosition - 1) + reviews.length) % reviews.length)
              }
              }></i>
            </div>
            <div className="slideIcon h-50 px-2 py-1 rounded-1">
              <i className="fa-solid fa-arrow-right fa-lg" role="button" onClick={() => {
                setIndexPosition((indexPosition + 1) % reviews.length)
              }}></i>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-auto justify-content-center align-items-center">
        {slider.map((item, i) => {
          return(
            <div key = {i} className="col-sm-3 pe-2 position-relative">
              <div className="card reviewCard p-3 rounded-4">
                {i == 0 || i == 3 ? <div className="forBlur position-absolute w-100 h-100 rounded-4"></div> : <></>}
                <div className="starRate mb-2">
                  {Array(Number(item.rate)).fill().map((star, j) => {
                    return(<i className="fa-solid fa-star fa-xs" key = {j}></i>)
                  })}
                  {Math.floor(Number(item.rate)) ==
                    Number(item.rate) ? (
                    <></>
                    ) : (
                    <i className="fa-solid fa-star-half-stroke fa-xs"></i>
                  )}
                  {Array(5 - Math.ceil(Number(item.rate))).fill().map((emptyStar, j) => {
                    return (
                      <i className="fa-regular fa-star fa-xs" key={j}></i>
                    );
                  })}
                </div>
                <div>
                  <div className="d-flex">
                    <h5 className="card-title mb-2 me-1">{item.first_name + ' ' + item.last_name}</h5>
                    <i className="verifiedIcon fa-solid fa-circle-check fa-sm"></i>
                  </div>
                  <p className="card-text">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {localStorage.getItem("id") != null ? 
        <div className="d-flex justify-content-end mx-5">
          <button type = "submit" className="addReviewButton btn btn-light rounded-5 shadow mt-3 mb-2" data-bs-toggle="modal" data-bs-target="#reviewModal"> Add Review </button>
        </div>
        :
        <></>
      }
      <div className="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="heading modal-title" id="exampleModalLabel">Your Review</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <p className='mb-4'>Add Review</p>
                <div>
                  <div className="form-floating">
                    <textarea className="form-control mb-3" placeholder="Your review..." id="floatingTextarea2" name = "description" onChange={getReviewData}></textarea>
                    <label htmlFor="floatingTextarea2">Review</label>
                  </div>
                </div>
                <label htmlFor='rate' className='form-label'>Rating from 1 to 5</label>
                <div className="position-relative">
                  <input id = "rate" className='inputBox shadow form-control mb-3 rounded-5 ps-4' type = "number" name = "rate" placeholder='Enter your rate' min = {1} max = {5} onChange={getReviewData}/>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type = "submit" className="modalButton btn btn-light rounded-5 shadow mt-3 mb-2" onClick={addReview} data-bs-dismiss="modal"> Add </button>
              <button type = "submit" className="modalButton btn btn-light rounded-5 shadow mt-3 mb-2" data-bs-dismiss="modal"> Close </button>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}
