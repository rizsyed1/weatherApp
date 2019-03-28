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

    this.fetchWeather = this.fetchWeather.bind(this);
    this.keyPress = this.keyPress.bind(this);

  }

  fetchWeather = () => {
    let cityName = this.state.city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a1a331f3fdba57d905c6274db55f1dc4`, {cache: 'no-store'})
      .then(data => {
        this.setState({
          main: data['weather']['main'],
          description: data['weather']['description'],
          temperature: data['main']['temp']
        })
      }
      )
  }

  keyPress = key => {
    if (key.keyCode === 13) {
      this.fetchWeather()
    } else {
      this.setState({
        city: this.state.city + key
      })
    }
  }


  render() {
    return (
      <div className="App">
        <FormComponent handleKeyDown={this.keyPress} />
        <WeatherComponent main={this.state.main} description={this.state.description} temperature={this.state.temperature} />
      </div>
    );
  }
}

export default App;
