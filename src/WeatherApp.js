import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleSearch(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `c9af21311efae38764da31570e4feab2`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleSearch);
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
