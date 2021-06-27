import React from "react";
import "./why.css";
import menu from "../../assets/Icon.png";
import delivery from "../../assets/Icon-1.png";
import email from "../../assets/Icon-2.png";

const Why = () => {
  return (
    <section className="why">
      <div className="container">
        <p className="why_heading">Reason</p>
        <h2 className="why_heading_2">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card why_card">
              <div className="card-body">
                <img src={menu} alt="menu" />
                <p className="why_card_head">Various Menus</p>
                <p className="why_card_main">
                  Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus
                  scelerisque ipsum nec commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card why_card">
              <div className="card-body">
                <img src={delivery} alt="delivery" />
                <p className="why_card_head">Pocket Friendly Delivery</p>
                <p className="why_card_main">
                  Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus
                  scelerisque ipsum nec commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card why_card">
              <div className="card-body">
                <img src={email} alt="email" />
                <p className="why_card_head">Best Offers</p>
                <p className="why_card_main">
                  Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus
                  scelerisque ipsum nec commodo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
