import React, { useState, useEffect } from 'react';
//allows use of env file(npm install dotenv)
import env from 'react-dotenv';
import './weatherComponent.css';
import axios from 'axios';
import DateComponent from './date/dateComponent';
const currentURL = env.currentApi;
const fiveDayURL = env.fiveDayApi;
const apiKey = env.apiKey;

export function Weather() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');
  const [units, setUnits] = useState('imperial');
  const [date, setDate] = useState({});

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
      <div className="main-container">
        <div className="search-container">
          <p>Search City </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit" className="button">
              Search
            </button>
          </form>
        </div>
        <div className="main-info-container">
          {data && (
            <div>
              <DateComponent dateTime={date} />
              <p className="location">{data.name}</p>
              <p className="temp">{data.main && data.main.temp}</p>
              <p className="description">
                {data.weather && data.weather[0].main}
              </p>
              <div className="additional-info">
                <p className="feels-like">
                  Feels like {data.main && data.main.feels_like}
                </p>
                <p className="temp-min">
                  Temperature minimum {data.main && data.main.temp_min}
                </p>
                <p className="temp-max">
                  Temperature maximum {data.main && data.main.temp_max}
                </p>
                <p className="pressure">
                  Pressure {data.main && data.main.pressure}
                </p>
                <p className="humidity">
                  Humidity {data.main && data.main.humidity}
                </p>
                <p className="wind">
                  Wind Speed {data.wind && data.wind.speed}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
