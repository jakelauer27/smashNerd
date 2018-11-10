import './styles/main.scss';
import React, { Component } from 'react';


class ChosenCharacter extends Component {

  render() {
    if (!this.props.chosenCharacter) {
      return  <div className='none'></div>
    }
   return (
    <div className='chosen-character-container'>
      <img src={this.props.chosenCharacter.images.large}></img>
      <h1>{this.props.chosenCharacter.name}</h1>
      <button onClick={() => this.props.startQuiz()}>Take the Quiz Again</button>
    </div>
   )
  }
}


                       

export default ChosenCharacter;