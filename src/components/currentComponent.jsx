import React from "react";
import DateComponent from "./date/dateComponent";
import "./currentComponent.css";
import  CurrentDataComponent from "./currentDataComponent";

export function CurrentComponent(props) {
  const srcLink = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div>
      <div className="current-main-container">
        <div className="location-container">
          <svg
            className="location-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="M24 33.1Q29.2 28.9 31.85 25.025Q34.5 21.15 34.5 17.8Q34.5 14.85 33.425 12.8Q32.35 10.75 30.775 9.45Q29.2 8.15 27.35 7.575Q25.5 7 24 7Q22.5 7 20.65 7.575Q18.8 8.15 17.225 9.45Q15.65 10.75 14.575 12.8Q13.5 14.85 13.5 17.8Q13.5 21.15 16.15 25.025Q18.8 28.9 24 33.1ZM24 36.9Q17.15 31.75 13.825 27.05Q10.5 22.35 10.5 17.8Q10.5 14.4 11.725 11.825Q12.95 9.25 14.9 7.5Q16.85 5.75 19.25 4.875Q21.65 4 24 4Q26.35 4 28.75 4.875Q31.15 5.75 33.1 7.5Q35.05 9.25 36.275 11.825Q37.5 14.4 37.5 17.8Q37.5 22.35 34.175 27.05Q30.85 31.75 24 36.9ZM24 21Q25.45 21 26.475 19.975Q27.5 18.95 27.5 17.5Q27.5 16.05 26.475 15.025Q25.45 14 24 14Q22.55 14 21.525 15.025Q20.5 16.05 20.5 17.5Q20.5 18.95 21.525 19.975Q22.55 21 24 21ZM10.5 44V41H37.5V44ZM24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Z" />
          </svg>
          <p className="location">
            {props.data.name}, {props.data.sys.country}
          </p>
        </div>
        <div className="date-component-container">
          <DateComponent dateTime={props.date} />
        </div>
        <div className="icon-data-container">
          <div className="current-icon-container">
            <img src={srcLink} alt="weather icon" id="current-icon"/>
          </div>
          <CurrentDataComponent units={props.units} data={props.data}/>
        </div>
      </div>
    </div>
  );
}
