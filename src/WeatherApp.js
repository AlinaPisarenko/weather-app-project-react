import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <form>
        <div className="row search-engine">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary search"
            />
            <input
              type="submit"
              value="O"
              className="btn btn-primary current"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-4 main-info">
          <h3>New York</h3>
          <div className="row main-icon">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                alt="description"
              />
            </div>
            <div className="col-6">
              <h1>10</h1>
              <h5>Time</h5>
            </div>
          </div>
          <ul>
            <li>Description</li>
            <li>Precipitation: </li>
            <li>Humidity: </li>
            <li>Wind: </li>
          </ul>
        </div>
        <div className="col-7 forecast">blaaaa</div>
      </div>
    </div>
  );
}
