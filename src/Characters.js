import React, { Component } from 'react';
import './styles/App.css';
import CharacterInfoCard from './CharacterInfoCard.js';
import { characters } from './data';

class Characters extends Component {
  constructor() {
    super();
    this.state = {
      data: characters.slice(0, characters.length)
    }
  }

  render() {
    return (
      <div className="characters-page">
        {
          this.state.data.map((character) => {
            return  <div className="character-preview-card">
                      <h2>{character.name}</h2>
                      <img src={character.images.icon} />
                    </div>
          })
        }
      </div>
    )
  }
}

export default Characters;






        // <CharacterInfoCard />





