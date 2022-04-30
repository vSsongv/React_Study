import React, { Component } from 'react';
import './validationSample.css';

class validationSample extends Component {
  state = {
    pwd: '',
    clicked: false,
    validated: false,
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
        <input type='password' value={this.state.pwd} onChange={this.handleChange} className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} />
        <button onClick={this.handleButton}>검증하기</button>
      </div>
    );
  }
}

export default validationSample;
