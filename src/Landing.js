import React, { Component } from 'react';
import './styles/main.scss';

const clouds = [];

for (let i = 1; i <= 16; i++) {
  clouds.push(`cloud${i}`);
}

class Landing extends Component {

runCountdown() {
    let countDownDate = new Date("Dec 7, 2018 22:00:00").getTime();
    let timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (!document.getElementById("timer")) {
      return;
    }
    document.getElementById("timer").innerHTML = days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}


render() {
    if (this.props.showLanding) {
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
              onClick={() => this.props.toggleLanding(false)}>Continue to Site
            </button>
            <div className='countdown-container'>
              <p className='countdown-label'>COUNTDOWN TO ULTIMATE</p>
              <p id='timer' onLoad={this.runCountdown()}></p>
            </div>
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