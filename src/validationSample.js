import React, { Component } from 'react';
import './validationSample.css';

class validationSample extends Component {
  state = {
    pwd: '',
    clicked: false,
    validate: false,
  };

  handleChange = (e) => {
    this.setState({
      pwd: e.target.value
    });
  };
  handleButton = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.pwd === '0000',
    });
  };
  render() {
    return (
      <div>
        <input type='password' value={this.state.pwd} />
      </div>
    );
  }
}

export default validationSample;
