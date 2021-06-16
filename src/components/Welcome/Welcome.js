import React from "react";
import chef from "../../assets/chef.png";
import Button from "../UI/Button/Button";
import "./welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img src={chef} alt="chef" className="img-fluid" />
          </div>
          <div className="col-md-7">
            <p className="welcome_heading">Welcome</p>
            <h2 className="welcome_heading2">Welcome to Figo Restaurant</h2>
            <p className="welcome_p">
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </p>
            <p className="welcome_p">
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </p>
            <Button title="Explore Our Story"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
