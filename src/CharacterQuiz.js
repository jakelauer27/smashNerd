import React, { Component } from 'react';
import LoadingElement from './LoadingElement';
import './styles/main.scss';
var imagesLoaded = require('imagesloaded');

class Compare extends Component {
  constructor() {
    super();
    this.state = {
      charactersLeft: [],
      chosenCharacter: {}
    };
  }

  componentDidMount() {
    this.setState({
      charactersLeft: this.props.charactersArray
    })
  }

  filterCharactersByGame(game1, game2) {
    this.setState({
      charactersLeft: charactersLeft.filter(character => {
        return (character.pastGames.includes(game1) && character.pastGames.includes(game2))
      })
    })
  }

  filterCharacters(category, direction) {
    if (direction === 'top') {
      this.setState({
        charactersLeft: charactersLeft.filter(character, i, array => {
          return character[category] >= array.length/4;
        })
      })
      return
    }
    this.setState({
      charactersLeft: charactersLeft.filter(character, i, array => {
        return character[category] >= (array.length - array.length/4);
      })
    })
  }

  revealCharacter() {
    chosenCharacterIndex = Math.round(Math.random((this.state.charactersLeft.length) -1 - 0) * 100)
    this.setState({
      chosenCharacter: this.state.charactersLeft[chosenCharacterIndex]
    })
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default CharacterQuiz;