import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import Clock from 'react-live-clock';
import SubmitComponent from '../submitComponent/submitComponent.js';
import TextboxComponent from '../textboxComponent/textboxComponent.js';
import './formComponent.css';

class FormComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    }
  }

  fetchWeather = () => {
    let cityName = this.state.city;
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a1a331f3fdba57d905c6274db55f1dc4`
    fetch(weatherAPI, {cache: 'no-store'})
      .then(response => response.json())
      .then(data => {
        this.props.setWeatherData(data)
      }).catch(err => {
        if(err == "TypeError: Cannot read property '0' of undefined") {
          alert('Please ensure you have entered a valid city name and try again')  
        } else {
          alert(err)
        }
      })
    }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchWeather()
  }

  handleChange = (event) => {
    this.setState({city: event.target.value}); 
  }


  render() {
    return (
      <form className='formContainer'>
        <TextboxComponent className='textAndSubmitComponents' city={this.state.city}  handleChange={this.handleChange}/>
        <SubmitComponent className='textAndSubmitComponents' handleSubmit={this.handleSubmit} />
        <div className='iconClockContainer'>
          <span className='label'><FontAwesomeIcon className='weatherIcon' icon={faCloudSunRain} />Find a forecast</span>
          <Clock className='time' format={'HH:mm:ss'} ticking={true} timezone={'UK'}/>
        </div>
      </form>
    )
  }
}

export default FormComponent;
