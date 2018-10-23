import React, { Component } from 'react';
import './styles/App.css';
import CharacterInfoCard from './CharacterInfoCard.js'


class Characters extends Component {
  render() {
    return (
      <div className="characters-page">
        <CharacterInfoCard />
        <h1>Characters</h1>
        }
      </div>
    )
  }
}

export default Characters;