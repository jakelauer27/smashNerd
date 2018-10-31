import React, { Component } from 'react';
import './styles/main.scss';

const clouds = [];

for (let i = 1; i <= 16; i++) {
  clouds.push(`cloud${i}`);
}

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showLanding: true
    };
  }
  hide = (e) => {
    this.props.renderCharacters(e);
    this.setState({
      showLanding: false
    });
  }

  render() {
    if (this.state.showLanding) {
      return (
        <div className='landing-page'>
          <div className='action-container'>
            {
              clouds.map( (cloud, i) => {
                return  <img className={`${cloud} cloud`} 
                  key={i} 
                  src={`./images/general/${cloud}.png`} />;
              })
            }
            <img className='smash-logo' 
              src='./images/general/smash_logo_large.png' />
            <button className='Characters' 
              onClick={this.hide}>Continue to Site
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='nothing'>
        </div>
      );
    }
  } 
}

export default Landing;