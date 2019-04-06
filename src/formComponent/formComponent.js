import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <label> Country:
          <input type='text' value={this.state.city} placeholder='city' onChange={this.handleChange}/>
        </label>
        <input type='submit' value='submit' onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default FormComponent;
