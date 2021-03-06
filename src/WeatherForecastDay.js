import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function dayT() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemp() {
    let max = Math.round(props.data.temp.max);
    return max;
  }
  function minTemp() {
    let min = Math.round(props.data.temp.min);
    return min;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{dayT()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={40}
        className="WeatherForecast-icon"
      />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemp()}°</span>{" "}
        <span className="WeatherForecast-temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
