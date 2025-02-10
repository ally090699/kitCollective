import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../public/img/banner.jpg"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
            <img src={bannerImg} class="d-inline-block align-top" alt="Yarn Roll Icon"/>
            <Link id="banner-title" className="navbar-brand" to="/">
                Kit Collective
            </Link>
            <i id="banner-slogan">Unwind Together, Create Forever</i>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
