import React from "react";
import "./currentComponent.css";

export default function CurrentDataComponent(props) {
  const tempSymbol = (units) => {
    if (units === "imperial") {
      return (
        <div>
          <p className="temp">
            {props.data.main && props.data.main.temp.toFixed()}°F
          </p>
          <p className="feels-like">
            Feels like {props.data.main && props.data.main.feels_like.toFixed()}
            °F
          </p>
          <div className="wind-container">
            <svg
              className="wind-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <path d="M23.25 40Q20.55 40 18.975 38.6Q17.4 37.2 17.4 34.35H20.8Q20.8 35.65 21.375 36.325Q21.95 37 23.25 37Q24.6 37 25.175 36.4Q25.75 35.8 25.75 34.35Q25.75 32.9 25.175 32.225Q24.6 31.55 23.25 31.55H4V28.55H23.25Q25.95 28.55 27.35 29.95Q28.75 31.35 28.75 34.35Q28.75 37.2 27.35 38.6Q25.95 40 23.25 40ZM4 19.6V16.6H31.4Q33.25 16.6 34.1 15.725Q34.95 14.85 34.95 12.8Q34.95 10.75 34.1 9.875Q33.25 9 31.4 9Q29.5 9 28.65 10.025Q27.8 11.05 27.8 12.6H24.8Q24.8 9.7 26.55 7.85Q28.3 6 31.4 6Q34.45 6 36.2 7.775Q37.95 9.55 37.95 12.8Q37.95 16.05 36.2 17.825Q34.45 19.6 31.4 19.6ZM37.6 36.1V33.1Q39.35 33.1 40.175 32.125Q41 31.15 41 29.3Q41 27.4 40.075 26.55Q39.15 25.7 37.4 25.7H4V22.7H37.4Q40.5 22.7 42.25 24.45Q44 26.2 44 29.3Q44 32.5 42.35 34.3Q40.7 36.1 37.6 36.1Z" />
            </svg>
            <div className="wind">
              <p>{props.data.wind && props.data.wind.speed.toFixed()}</p>
              <p>mi/hr</p>
            </div>
          </div>

          <p className="temp-min-max">
            {props.data.main && props.data.main.temp_max.toFixed()}°F/
            {props.data.main && props.data.main.temp_min.toFixed()}°F
          </p>
        </div>
      );
    } else if (units === "metric") {
      return (
        <div>
          <p className="temp">
            {props.data.main && props.data.main.temp.toFixed()}°C
          </p>
          <p className="feels-like">
            Feels like {props.data.main && props.data.main.feels_like.toFixed()}
            °C
          </p>
          <div className="wind-container">
            <svg
              className="wind-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <path d="M23.25 40Q20.55 40 18.975 38.6Q17.4 37.2 17.4 34.35H20.8Q20.8 35.65 21.375 36.325Q21.95 37 23.25 37Q24.6 37 25.175 36.4Q25.75 35.8 25.75 34.35Q25.75 32.9 25.175 32.225Q24.6 31.55 23.25 31.55H4V28.55H23.25Q25.95 28.55 27.35 29.95Q28.75 31.35 28.75 34.35Q28.75 37.2 27.35 38.6Q25.95 40 23.25 40ZM4 19.6V16.6H31.4Q33.25 16.6 34.1 15.725Q34.95 14.85 34.95 12.8Q34.95 10.75 34.1 9.875Q33.25 9 31.4 9Q29.5 9 28.65 10.025Q27.8 11.05 27.8 12.6H24.8Q24.8 9.7 26.55 7.85Q28.3 6 31.4 6Q34.45 6 36.2 7.775Q37.95 9.55 37.95 12.8Q37.95 16.05 36.2 17.825Q34.45 19.6 31.4 19.6ZM37.6 36.1V33.1Q39.35 33.1 40.175 32.125Q41 31.15 41 29.3Q41 27.4 40.075 26.55Q39.15 25.7 37.4 25.7H4V22.7H37.4Q40.5 22.7 42.25 24.45Q44 26.2 44 29.3Q44 32.5 42.35 34.3Q40.7 36.1 37.6 36.1Z" />
            </svg>
            <div className="wind">
              <p>{props.data.wind && props.data.wind.speed.toFixed()}</p>
              <p>m/s</p>
            </div>
          </div>

          <p className="temp-min-max">
            {props.data.main && props.data.main.temp_max.toFixed()}°C/
            {props.data.main && props.data.main.temp_min.toFixed()}°C
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p className="temp">
            {props.data.main && props.data.main.temp.toFixed()}K
          </p>
          <p className="feels-like">
            Feels like {props.data.main && props.data.main.feels_like.toFixed()}
            K
          </p>
          <div className="wind-container">
            <svg
              className="wind-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <path d="M23.25 40Q20.55 40 18.975 38.6Q17.4 37.2 17.4 34.35H20.8Q20.8 35.65 21.375 36.325Q21.95 37 23.25 37Q24.6 37 25.175 36.4Q25.75 35.8 25.75 34.35Q25.75 32.9 25.175 32.225Q24.6 31.55 23.25 31.55H4V28.55H23.25Q25.95 28.55 27.35 29.95Q28.75 31.35 28.75 34.35Q28.75 37.2 27.35 38.6Q25.95 40 23.25 40ZM4 19.6V16.6H31.4Q33.25 16.6 34.1 15.725Q34.95 14.85 34.95 12.8Q34.95 10.75 34.1 9.875Q33.25 9 31.4 9Q29.5 9 28.65 10.025Q27.8 11.05 27.8 12.6H24.8Q24.8 9.7 26.55 7.85Q28.3 6 31.4 6Q34.45 6 36.2 7.775Q37.95 9.55 37.95 12.8Q37.95 16.05 36.2 17.825Q34.45 19.6 31.4 19.6ZM37.6 36.1V33.1Q39.35 33.1 40.175 32.125Q41 31.15 41 29.3Q41 27.4 40.075 26.55Q39.15 25.7 37.4 25.7H4V22.7H37.4Q40.5 22.7 42.25 24.45Q44 26.2 44 29.3Q44 32.5 42.35 34.3Q40.7 36.1 37.6 36.1Z" />
            </svg>
            <div className="wind">
              <p>{props.data.wind && props.data.wind.speed.toFixed()}</p>
              <p>m/s</p>
            </div>
          </div>

          <p className="temp-min-max">
            {props.data.main && props.data.main.temp_max.toFixed()}K/
            {props.data.main && props.data.main.temp_min.toFixed()}K
          </p>
          
        </div>
      );
    }
  };

  return (
    <div className="data-container">
      {tempSymbol(props.units)}
      <p className="pressure">
        Pressure {props.data.main && props.data.main.pressure} hPa
      </p>
      <p className="humidity">
        Humidity {props.data.main && props.data.main.humidity}%
      </p>
    </div>
  );
}
