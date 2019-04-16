import React from 'react';
import './WeatherDisplay.css';

let temperatureDisplay = (celsius, temperature) => {
  if(celsius && temperature) {
    return temperature + '°C'
  } else if (temperature){
    return temperature + '°F'
  }
  }


function WeatherDisplay({description, temperature, location, celsius}) {
  return (
    <div className='cityNameContainer'>
      <p className='cityName'>
        {location? 'Weather forecast for ' + location : '' }
      </p>
      <div className='forecastContainer'>
        <h4>{description}</h4>
        <h4>{temperatureDisplay(celsius, temperature)}
        </h4>
      </div>
    </div>
  )
}

export default WeatherDisplay;
