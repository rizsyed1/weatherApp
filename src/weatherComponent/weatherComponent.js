import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './weatherComponent.css';
import Clock from 'react-live-clock';


function WeatherComponent({icon, description, temperature, city}) {
  return (
    <div className='container'>
      <p 
      className='cityName'>
        <FontAwesomeIcon 
          className='weatherIcon' 
          icon={icon} 
        />
      weather forcast for {city}</p>
      <div className='forecastContainer'>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'UK'}/> 
        <h4>{description}</h4>
        <h4>{temperature}</h4>
      </div>
    </div>
  )
}

export default WeatherComponent;
