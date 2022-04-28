import React from "react";
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
            <li>
              <select className="unit-menu" aria-label="units">
                <option defaultValue={"UNITS"} id="selected">
                  UNITS
                </option>
                <option value="1">IMPERIAL</option>
                <option value="2">METRIC</option>
                <option value="3">STANDARD</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
