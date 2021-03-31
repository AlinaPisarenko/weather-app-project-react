import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Time</li>
        <li>Description</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="description"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: </li>
            <li>Humidity: </li>
            <li>Wind: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
