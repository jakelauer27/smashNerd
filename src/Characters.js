import React, { Component } from 'react';
import './styles/App.css';
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
 }

 componentDidMount() {
   fetch('http://whateverly-datasets.herokuapp.com/api/v1/characters')
     .then(response => response.json())
     .then(characters => {
       this.setState({
       characters: characters.characters,
       })
     })
     .catch(error => console.log(error))
 }

  selectCharacter(e) {
   let character = this.state.characters.find((character) => {
      return character.name.replace(/\s/g, '') === e.target.classList[0];
    })
    this.setState({
      currentCharacter: e.target.classList[0],
      card: character
    })
  }

 render() {
  console.log('character:', this.state.card)
   return (
     <div className="characters-page">
       {
         this.state.characters.map((character) => {
           return  <div onClick={e => this.selectCharacter(e)} className={`${character.name.replace(/\s/g, '')} character-preview-card`}>
                     <h2 onClick={e => this.selectCharacter(e)} className={character.name.replace(/\s/g, '')}>{character.name}</h2>
                     <img onClick={e => this.selectCharacter(e)} className={`${character.name.replace(/\s/g, '')} character-preview-icon`} src={character.images.icon} />
                   </div>
         })
       }
       <CharacterInfoCard character={this.state.card}/>
     </div>
   )
 }
}

export default Characters;





