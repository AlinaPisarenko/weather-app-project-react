import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
