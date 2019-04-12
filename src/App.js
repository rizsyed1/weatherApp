import React, { Component } from 'react';
import './App.css';
import FormComponent from './formComponent/formComponent.js';
import WeatherComponent from './weatherComponent/weatherComponent.js';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      city: '',
      description: '',
      temperature: '',
    }
}

  setWeatherData = data =>{
    this.setState({
      city: data['name'],
      description: data['weather'][0]['description'] ,
      temperature: data['main']['temp']
    })
  }





  render() {
    return (
      <div className="App">
        <FormComponent fetchWeather={this.fetchWeather} setWeatherData={this.setWeatherData} />
        <WeatherComponent icon={faCloudSunRain} city={this.state.city} main={this.state.main} description={this.state.description} temperature={this.state.temperature} />
      </div>
    );
  }
}

export default App;
