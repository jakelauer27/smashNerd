import React, { Component } from 'react';
import './styles/main.scss';
import CharacterInfoCard from './CharacterInfoCard.js';

class Characters extends Component {
 constructor() {
   super();
   this.state = {
     card: '',
     characters: [],
     currentCharacter: '',
     nextCharacter: ''
   }
   this.scrollCard = this.scrollCard.bind(this);
   this.removeCard = this.removeCard.bind(this)
 }

 componentDidMount() {
   fetch('http://whateverly-datasets.herokuapp.com/api/v1/characters')
     .then(response => response.json())
     .then(data => {
        this.setState({
          characters: data.characters.map((character, i) => {
            let rank = 59;
            data.characters.forEach(compare => {
              if (character.speeds.run_speed + character.speeds.air_speed + character.speeds.initial_dash >= 
                  compare.speeds.run_speed +  compare.speeds.air_speed + compare.speeds.initial_dash) {
                rank --;
              }
            })
            character.speeds.speed_rank = rank;
            character.index = i;
            return character;
            })
        })
     })
     .catch(error => console.log(error))
 }

  selectCharacter(e) {
    let character = this.state.characters.find((character) => {
      return character.index === parseInt(e.target.classList[0]);
    })
    this.setState({
      currentCharacter: parseInt(e.target.classList[0]),
      card: character
    })
  }

  setIndex() {

    this.setState({
      characters: this.state.characters.map((character, i) => {
        character.index = i;
        return character;
      })
    })
  }

scrollCard(e) {
    if (e.target.classList.contains('left-button')) {
      let character = this.state.characters.find((character) => {
      return character.index === this.state.currentCharacter - 1
    })
      this.setState ({
        currentCharacter: this.state.currentCharacter - 1,
        card: character
      })
    } else {
      let character = this.state.characters.find((character) => {
      return character.index === this.state.currentCharacter + 1
    })
      this.setState ({
        currentCharacter: this.state.currentCharacter + 1,
        card: character
      })
    }
  }


  removeCard(e) {
    if (e.target.classList.contains('delete-button')) {
      this.setState({
        card: ''
      })
    }
  }

 render() {
   return (
     <div className="characters-page">
       {
         this.state.characters.map((character) => {
           return  <div onClick={e => this.selectCharacter(e)} className={`${character.index} character-preview-card`} key={character.index}
                    style={{'background-image': `url(${character.images.icon})`}}>
                     <h2 onClick={e => this.selectCharacter(e)} className={`${character.index} preview-card-name`}>{character.name}</h2>
                   </div>
         })
       }

       <CharacterInfoCard character={this.state.card} 
                          scrollCard={this.scrollCard}
                          removeCard={this.removeCard}/>
     </div>
   )
 }
}

export default Characters;





