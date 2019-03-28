import React from 'react';

function WeatherComponent({main, description, temperature}) {
  return (
    <div>
      <p>weather</p>
      <h4>Overall you will see {main}</h4>
      <h4>{description}</h4>
      <h4>The temperature will be {temperature}</h4>
    </div>
  )
}

export default WeatherComponent;
