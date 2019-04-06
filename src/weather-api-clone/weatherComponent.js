import React from "react";

const WeatherComponent = ({ cityName, main, description, temperature }) => (
  <div>
    <p>{cityName}</p>
    <p>{main}</p>
    <p>{description}</p>
    <p>{temperature}</p>
  </div>
);

export default WeatherComponent;
