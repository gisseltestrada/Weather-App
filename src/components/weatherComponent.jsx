import React, { useState, useEffect } from "react";
//allows use of env file(npm install dotenv)
import env from "react-dotenv";
import "./weatherComponent.css";
import axios from "axios";
import { CurrentComponent } from "./currentComponent.jsx";
import { ForecastComponent } from "./forecastComponent"
import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";

const currentURL = env.currentApi;
const fiveDayURL = env.fiveDayApi;
const apiKey = env.apiKey;

export function Weather() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [units, setUnits] = useState("imperial");
  const [date, setDate] = useState({});
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.get(currentURL, {
        params: {
          q: location,
          appid: apiKey,
          units: units,
        },
      });
      if (response.status === 200) {
        setData(response.data);
        setDescription(response.data.weather[0].main)
        setDate({
          dt: response.data.dt,
          timezone: response.data.timezone,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="toolbar-container">
          <div className="toolbar-search">
            <div className="search-icon-contianer">
              <span>
                <svg
                  className="search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d={"M 20.49 19 l -5.73 -5.73 C 15.53 12.2 16 10.91 16 9.5 C 16 5.91 13.09 3 9.5 3 S 3 5.91 3 9.5 S 5.91 16 9.5 16 c 1.41 0 2.7 -0.47 3.77 -1.24 L 19 20.49 L 20.49 19 Z M 5 9.5 C 5 7.01 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 S 5 11.99 5 9.5 Z"} />
                </svg>
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button type="submit" className="button">
                SEARCH
              </button>
            </form>
          </div>
        </div>
        <div className="main-info-container">
          {data && <CurrentComponent data={data} date={date} description={description}/>}
        </div>
      </div>
      <div className="forecast-component-container">
        <ForecastComponent />
        <ForecastComponent />
        <ForecastComponent />
        <ForecastComponent />
        <ForecastComponent />
      </div>
      <Footer />
    </div>
  );
}
