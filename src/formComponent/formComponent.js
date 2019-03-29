import React from 'react';

class FormComponent extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      city: ''
    }
  }

  handleChange = (event) => this.setState({city: event.target.value})

  render() {
    return (
      <form onSubmit={() => this.props.setCity(this.state.city)}>
        <label> Country:
          <input type='text' value={this.state.city} placeholder='city' onChange={this.handleChange}/>
        </label>
        <input type='submit' value='submit'  />
      </form>
    )
  }
}

export default FormComponent;
