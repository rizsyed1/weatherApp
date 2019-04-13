import React, { Component } from 'react';
import './App.css';
import FormComponent from './formComponent/formComponent.js';
import WeatherComponent from './weatherComponent/weatherComponent.js';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

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
      location: 'Weather forecast for ' + data['name'],
      description: data['weather'][0]['description'] ,
      temperature: data['main']['temp']
    })
  }





  render() {
    return (
      <div className="weatherApp">
        <FormComponent 
          fetchWeather={this.fetchWeather} 
          setWeatherData={this.setWeatherData}
        />
        <WeatherComponent 
            icon={faCloudSunRain} 
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
