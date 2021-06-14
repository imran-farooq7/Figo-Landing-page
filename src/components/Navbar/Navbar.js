import React from "react";
import "./Navbar.css";
import cart from "../../assets/Group 393.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand">Figo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Sign In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <img src={cart} alt="add to cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
