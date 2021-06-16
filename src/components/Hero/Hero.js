import React from "react";
import "./Hero.css";
import Chef from "../../assets/165.png";
import Button from "../UI/Button/Button";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <section className="hero">
      <Navbar />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div>
              <h2 className="hero_main_heading">
                All in Good Taste Food With Figo.
              </h2>
              <p className="hero_main_paragraph">
                Quickly predominate standard compliant architecture and may have
                prospective internal or organic sources.
              </p>
              <input
                type="text"
                placeholder="Enter your address"
                className="hero_main_input"
              />
              <Button title="Get Started"></Button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={Chef} className="img-fluid" alt="Chef" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
