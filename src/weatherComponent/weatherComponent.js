import React from 'react';
import './weatherComponent.css';



function WeatherComponent({description, temperature, location}) {
  return (
    <div className='cityNameContainer'>
      <p className='cityName'>
      {location}
      </p>
      <div className='forecastContainer'>
        <h4>{description}</h4>
        <h4>{temperature}</h4>
      </div>
    </div>
  )
}

export default WeatherComponent;
