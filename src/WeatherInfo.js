import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              <WeatherIcon code={props.data.icon} size={80} />
            </div>
            <WeatherTemperature
              celsius={props.data.temp}
              icon={props.data.description}
            />
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
