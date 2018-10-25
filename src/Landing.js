import React, { Component } from 'react';
import './styles/main.scss';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showLanding: true
    }
  }
  hide = (e) => {
    this.props.renderCharacters(e)
    this.setState({
      showLanding: false
    })
  }

  render() {
    if (this.state.showLanding) {
      return (
        <div className='landing-page'>
          <div className='action-container'>
          <img className='cloud1 cloud' src='./images/general/cloud6.png' />
          <img className='cloud5 cloud' src='./images/general/cloud6.png' />
          <img className='cloud8 cloud' src='./images/general/cloud6.png' />
          <img className='cloud2 cloud' src='./images/general/cloud5.png' />
          <img className='cloud3 cloud' src='./images/general/cloud4.png' />
          <img className='cloud6 cloud' src='./images/general/cloud5.png' />
          <img className='cloud4 cloud' src='./images/general/cloud3.png' />
          <img className='cloud7 cloud' src='./images/general/cloud3.png' />
          <img className='cloud9 cloud' src='./images/general/cloud6.png' />
          <img className='cloud10 cloud' src='./images/general/cloud6.png' />
          <img className='cloud11 cloud' src='./images/general/cloud6.png' />
          <img className='cloud12 cloud' src='./images/general/cloud5.png' />
          <img className='cloud13 cloud' src='./images/general/cloud4.png' />
          <img className='cloud14 cloud' src='./images/general/cloud5.png' />
          <img className='cloud15 cloud' src='./images/general/cloud3.png' />
          <img className='cloud16 cloud' src='./images/general/cloud3.png' />
          <img className='smash-logo'src='./images/general/smash_logo_large.png' />
          <button className='Characters' onClick={this.hide}>Continue to Site</button>
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