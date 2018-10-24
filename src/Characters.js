import React, { Component } from 'react';
import './styles/App.css';
import CharacterInfoCard from './CharacterInfoCard.js';

class Characters extends Component {
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

 render() {
   return (
     <div className="characters-page">
       {
         this.state.characters.map((character) => {
           return  <div className="character-preview-card">
                     <h2>{character.name}</h2>
                     <img className="character-preview-icon" src={character.images.icon} />
                   </div>
         })
       }
     </div>
   )
 }
}

export default Characters;






       // <CharacterInfoCard />