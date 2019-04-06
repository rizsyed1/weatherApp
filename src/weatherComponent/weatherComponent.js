import React from 'react';

function WeatherComponent({main, description, temperature, city}) {
  return (
    <div>
      <p>weather</p>
      <h4>{city}</h4>
      <h4> {main}</h4>
      <h4>{description}</h4>
      <h4>{temperature}</h4>
    </div>
  )
}

export default WeatherComponent;
