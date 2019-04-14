import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form.js';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      location: '',
      description: '',
      temperature: '',
    }
}

  setWeatherData = data =>{
    this.setState({
      location: data.name,
      description: data.weather[0].description ,
      temperature: data.main.temp
    })
  }





  render() {
    return (
      <div className="weatherApp">
        <Form
          fetchWeather={this.fetchWeather} 
          setWeatherData={this.setWeatherData}
        />
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
