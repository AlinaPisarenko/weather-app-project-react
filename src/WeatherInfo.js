import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4 main-info">
          <h3>{props.data.city}</h3>
          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
          <div className="row main-icon">
            <div className="col-6">
              <img src={props.data.icon} alt={props.data.description} />
            </div>
            <div className="col-6">
              <h1>{props.data.temp}°</h1>
              <h5 className="text-capitalize">{props.data.description}</h5>
            </div>
          </div>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
        <div className="col-7 forecast">Forecast</div>
      </div>
    </div>
  );
}
