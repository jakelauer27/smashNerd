import React, { Component } from 'react';
import { cardCategories } from './data';
import { cardProsCons } from './data';
import './styles/main.scss';

class CharacterInfoCard extends Component {
 
  render() {
    if(this.props.character === '') {
      return ( <div></div> )
    } else return (
      <div className='character-info-card'>
        <div className='div-wrapper'>
          <section className='character-card-image-section'>
            <img className='character-card-info-image' src={this.props.character.images.large} />
          </section>
          <section className='character-card-info-stats'>
            <h1 className='character-card-info-name'>{this.props.character.name}</h1> 
            {
              cardCategories.map((category, index) => {
                return <div className='character-stats-div' key={index}>
                          <p className={`character-card-title-${category.name.toLowerCase()}`}>
                          {category.name}</p>
                          <p className={`character-card-info-${category.name.toLowerCase()}`}>
                          {this.props.character[category.key1][category.key2]}</p>
                       </div>
              })
            }
            {
              cardProsCons.map((category, index) => {
                return <div className='character-stats-div' key={index}>
                          <p className={`character-card-title-${category.name.toLowerCase()}`}>
                          {category.name}</p>
                          {
                            this.props.character[category.key].map((item, index) => {
                              return <p className={`character-card-info-${category.key}`} key={index}>{item}</p>
                            })
                          }
                       </div>
              } )
            }
            <a href={this.props.character.smash_wiki} target='_blank' className='character-card-info-link'>Learn More</a>
          </section>
        </div>
        <button onClick={e => this.props.scrollCard(e)} className='left-button'>Left</button>
        <button onClick={e => this.props.scrollCard(e)} className='right-button'>Right</button>
        <button className='delete-button'>Delete</button>
      </div>
    )
  }
}

export default CharacterInfoCard;