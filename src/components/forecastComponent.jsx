import React from "react";
import { DateTime } from "luxon";
import "./forecastComponent.css";

export function ForecastComponent(props) {
  const maxTemp = props.weather.temp.max;
  const minTemp = props.weather.temp.min;
  const windSpeed = props.weather.wind_speed;
  const forecastDate = props.weather.dt;
  const forecastTimezone = props.timezone;
  const srcString = `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`;

  const date = DateTime.fromSeconds(forecastDate, {
    zone:
      forecastTimezone / 3600 > 0
        ? `utc+${forecastTimezone / 3600}`
        : `utc${forecastTimezone / 3600}`,
  });

  const tempSymbol = (units) => {
    if (units === "imperial") {
      return (
        <div>
          <p className="temp-high-low">
            {minTemp.toFixed()}°F/{maxTemp.toFixed()}°F
          </p>
          <div className="forecast-wind-container">
            <svg
              className="forecast-wind-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <path d="M23.25 40Q20.55 40 18.975 38.6Q17.4 37.2 17.4 34.35H20.8Q20.8 35.65 21.375 36.325Q21.95 37 23.25 37Q24.6 37 25.175 36.4Q25.75 35.8 25.75 34.35Q25.75 32.9 25.175 32.225Q24.6 31.55 23.25 31.55H4V28.55H23.25Q25.95 28.55 27.35 29.95Q28.75 31.35 28.75 34.35Q28.75 37.2 27.35 38.6Q25.95 40 23.25 40ZM4 19.6V16.6H31.4Q33.25 16.6 34.1 15.725Q34.95 14.85 34.95 12.8Q34.95 10.75 34.1 9.875Q33.25 9 31.4 9Q29.5 9 28.65 10.025Q27.8 11.05 27.8 12.6H24.8Q24.8 9.7 26.55 7.85Q28.3 6 31.4 6Q34.45 6 36.2 7.775Q37.95 9.55 37.95 12.8Q37.95 16.05 36.2 17.825Q34.45 19.6 31.4 19.6ZM37.6 36.1V33.1Q39.35 33.1 40.175 32.125Q41 31.15 41 29.3Q41 27.4 40.075 26.55Q39.15 25.7 37.4 25.7H4V22.7H37.4Q40.5 22.7 42.25 24.45Q44 26.2 44 29.3Q44 32.5 42.35 34.3Q40.7 36.1 37.6 36.1Z" />
            </svg>
            <div className="forecast-wind">
              <p>{windSpeed.toFixed()}</p>
              <p>mi/hr</p>
            </div>
          </div>
        </div>
      );
    } else if (units === "metric") {
      return (
        <div>
          <p className="temp-high-low">
            {minTemp.toFixed()}°C/{maxTemp.toFixed()}°C
          </p>
          <div className="forecast-wind-container">
            <svg
              className="forecast-wind-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <path d="M23.25 40Q20.55 40 18.975 38.6Q17.4 37.2 17.4 34.35H20.8Q20.8 35.65 21.375 36.325Q21.95 37 23.25 37Q24.6 37 25.175 36.4Q25.75 35.8 25.75 34.35Q25.75 32.9 25.175 32.225Q24.6 31.55 23.25 31.55H4V28.55H23.25Q25.95 28.55 27.35 29.95Q28.75 31.35 28.75 34.35Q28.75 37.2 27.35 38.6Q25.95 40 23.25 40ZM4 19.6V16.6H31.4Q33.25 16.6 34.1 15.725Q34.95 14.85 34.95 12.8Q34.95 10.75 34.1 9.875Q33.25 9 31.4 9Q29.5 9 28.65 10.025Q27.8 11.05 27.8 12.6H24.8Q24.8 9.7 26.55 7.85Q28.3 6 31.4 6Q34.45 6 36.2 7.775Q37.95 9.55 37.95 12.8Q37.95 16.05 36.2 17.825Q34.45 19.6 31.4 19.6ZM37.6 36.1V33.1Q39.35 33.1 40.175 32.125Q41 31.15 41 29.3Q41 27.4 40.075 26.55Q39.15 25.7 37.4 25.7H4V22.7H37.4Q40.5 22.7 42.25 24.45Q44 26.2 44 29.3Q44 32.5 42.35 34.3Q40.7 36.1 37.6 36.1Z" />
            </svg>
            <div className="forecast-wind">
              <p>{windSpeed.toFixed()}</p>
              <p>m/s</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p className="temp-high-low">
            {minTemp.toFixed()}K/{maxTemp.toFixed()}K
          </p>
          <div className="forecast-wind-container">
            <svg
              className="forecast-wind-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <path d="M23.25 40Q20.55 40 18.975 38.6Q17.4 37.2 17.4 34.35H20.8Q20.8 35.65 21.375 36.325Q21.95 37 23.25 37Q24.6 37 25.175 36.4Q25.75 35.8 25.75 34.35Q25.75 32.9 25.175 32.225Q24.6 31.55 23.25 31.55H4V28.55H23.25Q25.95 28.55 27.35 29.95Q28.75 31.35 28.75 34.35Q28.75 37.2 27.35 38.6Q25.95 40 23.25 40ZM4 19.6V16.6H31.4Q33.25 16.6 34.1 15.725Q34.95 14.85 34.95 12.8Q34.95 10.75 34.1 9.875Q33.25 9 31.4 9Q29.5 9 28.65 10.025Q27.8 11.05 27.8 12.6H24.8Q24.8 9.7 26.55 7.85Q28.3 6 31.4 6Q34.45 6 36.2 7.775Q37.95 9.55 37.95 12.8Q37.95 16.05 36.2 17.825Q34.45 19.6 31.4 19.6ZM37.6 36.1V33.1Q39.35 33.1 40.175 32.125Q41 31.15 41 29.3Q41 27.4 40.075 26.55Q39.15 25.7 37.4 25.7H4V22.7H37.4Q40.5 22.7 42.25 24.45Q44 26.2 44 29.3Q44 32.5 42.35 34.3Q40.7 36.1 37.6 36.1Z" />
            </svg>
            <div className="forecast-wind">
              <p>{windSpeed.toFixed()}</p>
              <p>m/s</p>
            </div>
          </div>
        </div>
      );
    }
  };

  const getWeekday = () => {
    const dateComp = date.toLocaleString(DateTime.DATETIME_FULL);
    const currentDay = new Date(dateComp);

    switch (currentDay.getDay()) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      default:
        return "not found";
    }
  };

  return (
    <div className="forecast-main-container">
      <div className="forecast-data-container">
        <p className="weekday">{getWeekday()}</p>

        <img src={srcString} alt="weather icon" />
        {tempSymbol(props.units)}
      </div>
    </div>
  );
}
