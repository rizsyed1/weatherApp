import React from 'react';
import SubmitComponent from '../submitComponent/submitComponent.js';
import TextboxComponent from '../textboxComponent/textboxComponent.js';

class FormComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    }
  }

  fetchWeather = () => {
    let cityName = this.state.city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a1a331f3fdba57d905c6274db55f1dc4`, {cache: 'no-store'})
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
      <form>
        <label> Country:
        <TextboxComponent city={this.state.city}  handleChange={this.handleChange}/>
        </label>
        <SubmitComponent handleSubmit={this.handleSubmit} />
      </form>
    )
  }
}

export default FormComponent;
