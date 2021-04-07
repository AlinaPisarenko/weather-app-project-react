import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleSearch(response) {
    console.log(response.data);
  }

  let apiKey = `c9af21311efae38764da31570e4feab2`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(handleSearch);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="11n" size={40} className="WeatherForecast-icon" />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">18</span>{" "}
            <span className="WeatherForecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
