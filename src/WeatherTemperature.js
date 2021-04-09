import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="col-7">
        <span className="main-temp">{Math.round(props.celsius)}</span>
        <span className="units">
          C°|{" "}
          <a href="/" onClick={showFahrenheit}>
            F°
          </a>
        </span>

        <h5 className="text-capitalize">{props.icon}</h5>
      </div>
    );
  } else {
    return (
      <div className="col-7">
        <span className="main-temp">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            C°
          </a>
          | F°
        </span>

        <h5 className="text-capitalize">{props.icon}</h5>
      </div>
    );
  }
}
