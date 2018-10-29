import React, { Component } from 'react';
import './styles/main.scss';

class Universe extends Component {
  render() {
    if (this.props.universe === 'all' || this.props.universe === 'Super Smash Bros.') {
      return  <img className='universe-pic smash-logo' src='./images/general/smash_logo_large.png'></img>
    }
    return(
        <img className='universe-pic' src={`./images/universe_logos/${this.props.universe.replace(/\s/g, '_')}_logo.png`}></img>
      )
  }
}


export default Universe;