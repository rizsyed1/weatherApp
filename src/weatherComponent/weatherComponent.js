import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function WeatherComponent({icon, description, temperature, city}) {
  return (
    <div>
      <p>Weather forecast for {city}</p>
      <FontAwesomeIcon className='weatherIcon' icon={icon} />
      <h4>{description}</h4>
      <h4>{temperature}</h4>
    </div>
  )
}

export default WeatherComponent;
