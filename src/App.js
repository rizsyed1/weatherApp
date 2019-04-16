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
      error: false,
      celsius: true
    }
}

  setWeatherData = data => {
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

  tempConvertor = () => {
    if(this.state.celsius && this.state.location) {    
      this.setState({
        temperature: ((this.state.temperature * 9/5) + 32).toFixed(1),
        celsius: false
      });
    } else if(!this.state.celsius && this.state.location) {
        this.setState({
          temperature:((this.state.temperature - 32) * 5/9).toFixed(1),
          celsius: true
        });
    } else {
        return
    }
    
  }

  render() {    
    return (
      <div className="weatherApp">
        <Form
          setWeatherData={this.setWeatherData}
          celsius={this.state.celsius}
          tempConvertor={this.tempConvertor}
        />
        <ErrorWarning error={this.state.error} />
        <WeatherDisplay
          celsius={this.state.celsius}        
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
