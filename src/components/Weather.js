import React from "react";

import "../styles/Weather.css";

export default function Current({ weatherInfo, location, date }) {
  return (
    <div className="Weather">
      <div className="Weather_info">
        <img
          className="Weather_icon"
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.current.weather[0].icon +
            ".png"
          }
          alt={weatherInfo.current.weather[0].main}
        />
        <ul className="Weather_list">
          <li className="list_temperature">
            {Math.round(weatherInfo.current.temp)}
            <sup className="list_temperature-symbol">°C</sup>
          </li>
          <li> Humidity: {weatherInfo.current.humidity}% </li>
          <li>
            {" "}
            Wind: {Math.round(weatherInfo.current.wind_speed * 3.6)} km/h{" "}
          </li>
        </ul>
      </div>
      <div className="Weather_other-info">
        <h2 className="other-info_city">
          {location.city || location.town},{" "}
          {location.state || location.country.toUpperCase()}
        </h2>
        <h3 className="other-info_clouds">{date}</h3>
        <h3 className="other-info_clouds">
          {weatherInfo.current.weather[0].description}
        </h3>
      </div>
    </div>
  );
}
