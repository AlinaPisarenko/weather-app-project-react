import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSearch(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
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
            <h3>{weatherData.city}</h3>
            <h4>
              <FormattedDate date={weatherData.date} />
            </h4>
            <div className="row main-icon">
              <div className="col-6">
                <img src={weatherData.icon} alt={weatherData.description} />
              </div>
              <div className="col-6">
                <h1>{weatherData.temp}°</h1>
                <h5>{weatherData.description}</h5>
              </div>
            </div>
            <ul>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}</li>
            </ul>
          </div>
          <div className="col-7 forecast">Forecast</div>
        </div>
      </div>
    );
  } else {
    const apiKey = `c9af21311efae38764da31570e4feab2`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleSearch);
    return "Loading";
  }
}
