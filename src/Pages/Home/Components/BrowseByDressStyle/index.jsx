import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from "react-router-dom";

export default function BrowseByDressStyle() {
  return (
    <div className="container my-5">
      <div className="browseContainer rounded-5 w-100 h-100 text-center py-4 px-5">
        <h1 className="heading browseHeading my-5"> BROWSE BY DRESS STYLE </h1>
        <div className="row g-3">
          <div className="col-lg-4 gy-3">
            <Link to="/shop">
              <div className="casual rounded-4">
                <p className="ms-4 pt-2"> Casual </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-8 gy-3">
            <Link to="/shop">
              <div className="formal rounded-4">
                <p className="ms-4 pt-2"> Formal </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 gy-3">
            <Link to="/shop">
              <div className="party rounded-4">
                <p className="ms-4 pt-2"> Party </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 gy-3">
            <Link to="/shop">
              <div className="gym rounded-4">
                <p className="ms-4 pt-2"> Gym </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
