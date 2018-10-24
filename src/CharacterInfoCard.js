import React, { Component } from 'react';
import { cardCategories } from './data';
import { cardProsCons } from './data';
import './styles/App.css';

class CharacterInfoCard extends Component {
 constructor() {
   super();
   this.state = {
     characters: []
   }
 }

  render() {
    console.log('this.props:', this.props.character)
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
              cardCategories.map( category => {
                return <div className='character-stats-div'>
                          <p className={`character-card-title-${category.name.toLowerCase()}`}>
                          {category.name}</p>
                          <p className={`character-card-info-${category.name.toLowerCase()}`}>
                          {this.props.character[category.key1][category.key2]}</p>
                       </div>
              })
            }
            {
              cardProsCons.map( category => {

                return <div className='character-stats-div'>
                          <p className={`character-card-title-${category.name.toLowerCase()}`}>
                          {category.name}</p>
                          {
                            this.props.character[category.key].map( item => {
                              return <p className={`character-card-info-${category.key}`}>{item}</p>
                            })
                          }
                       </div>
              } )
            }
            <a href={this.props.character.smash_wiki} className='character-card-info-link'>Learn More</a>
          </section>
        </div>
      </div>
    )
  }
}









export default CharacterInfoCard;