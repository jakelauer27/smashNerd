import './styles/main.scss';
import React, { Component } from 'react';


class ChosenCharacter extends Component {

  render() {
    if (!this.props.chosenCharacter) {
      return  <div className='none'></div>
    }
   return (
    <div className='chosen-character-container'>
      <h2 className='chosen-character'>You got {this.props.chosenCharacter.name}!</h2>
      <img className='quiz-image' src={this.props.chosenCharacter.images.large}></img>
      <button onClick={() => this.props.startQuiz()}><p>Take Again</p></button>
    </div>
   )
  }
}


                       

export default ChosenCharacter;