import React, { useState } from "react";
import axios from "axios";
import "./navbar.css";

export function Navbar() {
  return (
    <div>
      <div className="navbar-main-container">
        <div>
          <ul className="navbar-container">
            <li>
              <p className="weather-tab">WEATHER</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
