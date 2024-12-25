import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3 ">
            <div>
              <h1 className="heading footerHeading mb-3">SHOP.CO</h1>
              <p className="mb-4">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="d-flex mb-5">
                <a href="https://x.com/home">
                  <div className="linkContainer rounded-circle me-2">
                    <i class="fa-brands fa-twitter fa-xs"></i>
                  </div>
                </a>
                <a href="https://www.facebook.com/">
                  <div className="linkContainer rounded-circle me-2">
                    <i class="fa-brands fa-facebook-f fa-xs"></i>
                  </div>
                </a>
                <a href="https://www.instagram.com/">
                  <div className="linkContainer rounded-circle me-2">
                    <i class="fa-brands fa-instagram fa-xs"></i>
                  </div>
                </a>
                <a href="https://github.com/">
                  <div className="linkContainer rounded-circle">
                    <i class="fa-brands fa-github fa-xs"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="row justify-content-between">
              <div className="col-md-3 col-6">
                <ul>
                  <h2 className="mb-4">COMPANY</h2>
                  <Link to="home">
                    <li> About </li>
                  </Link>
                  <Link to="home">
                    <li> Features </li>
                  </Link>
                  <Link to="home">
                    <li> Works </li>
                  </Link>
                  <Link to="home">
                    <li> Career </li>
                  </Link>
                </ul>
              </div>
              <div className="col-md-3 col-6">
                <ul>
                  <h2 className="mb-4">HELP</h2>
                  <Link to="home">
                    <li> Customer Support </li>
                  </Link>
                  <Link to="home">
                    <li> Delivery Details </li>
                  </Link>
                  <Link to="home">
                    <li> Terms & Conditions </li>
                  </Link>
                  <Link to="home">
                    <li> Privacy Policy </li>
                  </Link>
                </ul>
              </div>
              <div className="col-md-3 col-6">
                <ul>
                  <h2 className="mb-4">FAQ</h2>
                  <Link to="home">
                    <li> Account </li>
                  </Link>
                  <Link to="home">
                    <li> Manage Deliverables </li>
                  </Link>
                  <Link to="home">
                    <li> Orders </li>
                  </Link>
                  <Link to="home">
                    <li> Payments </li>
                  </Link>
                </ul>
              </div>
              <div className="col-md-3 col-6">
                <ul>
                  <h2 className="mb-4">RESOURCES</h2>
                  <Link to="home">
                    <li> Free eBooks </li>
                  </Link>
                  <Link to="home">
                    <li> Development Tutorial </li>
                  </Link>
                  <Link to="home">
                    <li> How to - Blog </li>
                  </Link>
                  <Link to="home">
                    <li> Youtube Playlist </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-3" />
        <div className="d-flex justify-content-between align-items-center pb-3">
          <div className="trademark">
            SHOP.CO © Made by{" "}
            <Link className="text-black">SHOP.CO Corporation</Link>, Designed by{" "}
            <Link className="text-black">SHOP.CO</Link>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div className="me-2 bg-light px-2 rounded-1">
              <i class="fa-brands fa-cc-visa fa-sm"></i>
            </div>
            <div className="me-2 bg-light px-2 rounded-1">
              <i class="fa-brands fa-cc-mastercard fa-sm"></i>
            </div>
            <div className="me-2 bg-light px-2 rounded-1">
              <i class="fa-brands fa-paypal fa-sm"></i>
            </div>
            <div className="me-2 bg-light px-2 rounded-1">
              <i class="fa-brands fa-apple-pay fa-sm"></i>
            </div>
            <div className="me-2 bg-light px-2 rounded-1">
              <i class="fa-brands fa-google-pay fa-sm"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
