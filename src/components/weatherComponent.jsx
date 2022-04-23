import React, { useState, useEffect } from "react";
//allows use of env file(npm install dotenv)
import env from "react-dotenv";
import "./weatherComponent.css"
const currentURL = env.currentApi;
const fiveDayURL = env.fiveDayApi;
const apiKey = env.apiKey;

export function Weather() {
  const currentLocationURL = `${currentURL}q=Dallas,TX,US&appid=${apiKey}`;
  const fiveDayLocationURL = `${fiveDayURL}q=Dallas,TX,US&appid=${apiKey}`;
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');

   useEffect( () => {
       fetch(currentLocationURL)
         .then((response) => response)
         .then((data) => console.log(data));
        
  });

  return (
    <div>
      <div className="main-container">
        <div className="search-container">
          <p>Search City </p>
          <input type="text" value="" id="" />
          <button>Search</button>
        </div>
        <div className="main-info-container">
          <p className="location">Dallas, TX</p>
          <p className="temp">81°F</p>
          <p className="description">Cloudy</p>
          <div className="additional-info">
            <p className="feels-like">Feels like 82°F</p>
            <p className="temp-min">Temperature minimum 79°F</p>
            <p className="temp-max">Temperature maximum 84°F</p>
            <p className="pressure">Pressure 29in</p>
            <p className="humidity">Humidity 53%</p>
            <p className="wind">Wind Speed 21mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}
