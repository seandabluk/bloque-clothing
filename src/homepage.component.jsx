import React from "react";

import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="conetnt">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="conetnt">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="conetnt">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="conetnt">
          <h1 className="title">WOMEN'S WEAR</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="conetnt">
          <h1 className="title">MEN'S WEAR</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
