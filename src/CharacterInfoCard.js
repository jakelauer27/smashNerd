import React, { Component } from 'react';
import './styles/App.css';

class CharacterInfoCard extends Component {
  render() {
    return (
      <div className='character-card'>
        <section className='character-card-info-image'>
          <img src='images/characters/bowser.png' />
        </section>
        <section className='character-card-info-stats'>
           <h1 className='character-card-info-name'>Bowser</h1>

          <div className='character-stats-div'>
            <p className='character-card-title-universe'>Universe</p>
            <p className='character-card-info-universe'>Mario</p>
          </div>

          <div className='character-stats-div'>
            <p className='character-card-title-tier'>Tier</p>
            <p className='character-card-info-tier'>Bowser</p>
          </div>

          <div className='character-stats-div'>
            <p className='character-card-title-rank'>Rank</p>
            <p className='character-card-info-rank'>13</p>
          </div>

          <div className='character-stats-div'>
            <p className='character-card-title-weight'>Weight Class</p>
            <p className='character-card-info-weight'>Heavy Weight</p>
          </div>

          <div className='character-stats-div'>
            <p className='character-card-title-pros'>Pros</p>
            <p className='character-card-info-pros'>Bowser</p>
          </div>

          <div className='character-stats-div'>
            <p className='character-card-title-cons'>Cons</p>
            <p className='character-card-info-cons'>Bowser</p>
          </div>

            <p className='character-card-info-link'><a href="www.link-to-wiki.com">Visit Bowser wiki</a> </p>
        </section>
      </div>
    )
  }
}









export default CharacterInfoCard;