import React from "react";

import "../styles/Forecast.css";

export default function Forecast({ weatherInfo, date }) {
  return (
    <div>
      <h1 className="Forecast_title">{[date[0], date[1], date[2]]}</h1>
      <img
        className="Forecast_weather-icon"
        src={
          "https://openweathermap.org/img/wn/" +
          weatherInfo.weather[0].icon +
          ".png"
        }
        alt={weatherInfo.weather[0].main}
      />
      <div className="Forecast_temperature">
        <span className="temperature_max">
          {Math.round(weatherInfo.temp.max)}
          <sup className="temperature_symbol">°</sup>
        </span>
        <span className="temperature_min">
          {Math.round(weatherInfo.temp.min)}
          <sup className="temperature_symbol">°</sup>
        </span>
      </div>
    </div>
  );
}
