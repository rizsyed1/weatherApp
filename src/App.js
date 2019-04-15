import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form.js';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay.js';
import ErrorWarning from './ErrorWarning/ErrorWarning.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: '',
      description: '',
      temperature: '',
      error: false
    }
}

  setWeatherData = data =>{
    if (data.message === 'city not found'){
      this.setState({
        location: '',
        description: '',
        temperature: '',
        error: true 
      });
    } else {
      this.setState({
        location: data.name,
        description: data.weather[0].description ,
        temperature: data.main.temp,
        error: false, 
      });
  
    }
  }


  render() {    
    return (
      <div className="weatherApp">
        <Form
          fetchWeather={this.fetchWeather} 
          setWeatherData={this.setWeatherData}
          displayWeatherError={this.displayWeatherError}
        />
        <ErrorWarning error={this.state.error} />
        <WeatherDisplay          
          location={this.state.location} 
          main={this.state.main} 
          description={this.state.description} 
          temperature={this.state.temperature} 
        />
      </div>
    );
  }
}

export default App;
