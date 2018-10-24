import React, { Component } from 'react';
import './styles/App.css';

class CharacterInfoCard extends Component {
 constructor() {
   super();
   this.state = {
     characters: []
   }
 }

 componentDidMount() {
   fetch('http://whateverly-datasets.herokuapp.com/api/v1/characters')
     .then(response => response.json())
     .then(characters => {
       this.setState({
       characters: characters.characters
       })
     })
     .catch(error => console.log(error))
 }

//add event listener to div
//onClick, target character's object
//character's info card renders to DOM


  render() {
    return (
      <div className='character-info-card'>
        {
          this.state.characters.map((character) => {
            return  <section className='character-card-info-image'>
                      <img src='images/characters/bowser.png' />
                    </section>
                    <section className='character-card-info-stats'>
                       <h1 className='character-card-info-name'>{character.name}</h1>

                      <div className='character-stats-div'>
                        <p className='character-card-title-universe'>Universe</p>
                        <p className='character-card-info-universe'>{character.universe}</p>
                      </div>

                      <div className='character-stats-div'>
                        <p className='character-card-title-tier'>Tier</p>
                        <p className='character-card-info-tier'>{character.tier.tier}</p>
                      </div>

                      <div className='character-stats-div'>
                        <p className='character-card-title-rank'>Rank</p>
                        <p className='character-card-info-rank'>{character.tier.rank}</p>
                      </div>

                      <div className='character-stats-div'>
                        <p className='character-card-title-weight'>Weight Class</p>
                    <p className='character-card-info-weight'>{character.weight.class}</p>
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
          })
        }
      </div>
    )
  }
}









export default CharacterInfoCard;