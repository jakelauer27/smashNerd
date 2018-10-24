import React, { Component } from 'react';
import './styles/App.css';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showLanding: true
    }
  }
  hide = () => {
    this.setState({
      showLanding: false
    })
  }

  render() {
    if (this.state.showLanding) {
      return (
        <div className='landing-page'>
          <div className='action-container'>
          <img src='./images/general/smash_logo_large.png' />
          <button onClick={this.hide}>Continue to Site</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className='nothing'>
        </div>
      )
    }
  } 
}

export default Landing;