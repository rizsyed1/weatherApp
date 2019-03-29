import React, { Component } from 'react';
import './App.css';
import FormComponent from './formComponent/formComponent.js';
import WeatherComponent from './weatherComponent/weatherComponent.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      city: '',
      main: '',
      description: '',
      temperature: '',
    }

  }

  fetchWeather = () => {
    let cityName = this.state.city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a1a331f3fdba57d905c6274db55f1dc4`, {cache: 'no-store'})
      .then(response => response.json())
      .then(data => {
        this.setState({
          main: data['weather']['main'],
          description: data['weather']['description'],
          temperature: data['main']['temp']
        })
      }
      )
  }

  setCity = (newCity) => {
      this.setState({
        city: newCity
      });
    this.fetchWeather()
  }





  render() {
    return (
      <div className="App">
        <FormComponent setCity={this.setCity} city={this.state.city} />
        <WeatherComponent main={this.state.main} description={this.state.description} temperature={this.state.temperature} />
      </div>
    );
  }
}

export default App;
