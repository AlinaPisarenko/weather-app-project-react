import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let AmOrPm = hours >= 12 ? `pm` : `am`;
  hours = hours % 12 || 12;
  let finalTime = hours + `:` + minutes + AmOrPm;

  return (
    <div>
      {day} {finalTime}
    </div>
  );
}
