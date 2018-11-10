import React, { Component } from 'react';
import characters from './utils/data';
import quizQuestions from './utils/quizQuestions'
import LoadingElement from './LoadingElement';
import './styles/main.scss';
import QuizQuestion from './QuizQuestion';
var imagesLoaded = require('imagesloaded');

class CharacterQuiz extends Component {
  constructor() {
    super();
    this.state = {
      charactersLeft: JSON.parse(JSON.stringify(characters.characters.map((character) => {
        let rank = 59;

        characters.characters.forEach(compare => {
          if (character.speeds.run_speed + 
              character.speeds.air_speed + 
              character.speeds.initial_dash 
              >= compare.speeds.run_speed +  
              compare.speeds.air_speed + 
              compare.speeds.initial_dash)  {
            rank --;
          }
        });
        character.speed_rank = rank;
        return character;
      }))),
      chosenCharacter: {},
      currentQuestionIndex: -1,
      quizQuestions: JSON.parse(JSON.stringify(quizQuestions.quizQuestions))
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     charactersLeft: this.props.charactersArray
  //   })
  // }

  startQuiz() {
    this.setState({
      currentQuestionIndex: 0
    })
  }

  nextQuestion = (answerIndex, clickedBtn) => {
    if(clickedBtn === 'finish') {
      this.revealCharacter();
      return;
    }
    if (this.state.currentQuestionIndex === 0) {
      this.filterCharactersByGame(this.state.quizQuestions[this.state.currentQuestionIndex]['game-selections'][answerIndex])
    } else {
      this.filterCharacters(answerIndex, this.state.quizQuestions[this.state.currentQuestionIndex].category)
    }
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex += 1,
    })
  }

  filterCharactersByGame(games) {
    this.setState({
      charactersLeft: this.state.charactersLeft.filter(character => {
        return (character.past_smash_games.includes(games[0]) || character.past_smash_games.includes(games[1]))
      })
    })
  }

  filterCharacters(direction, category) {
    if (direction < 2) {
      this.setState({
        charactersLeft: this.state.charactersLeft.filter((character, i, array) => {
          return character[category] >= array.length/4;
        })
      })
      return
    }
    this.setState({
      charactersLeft: this.state.charactersLeft.filter((character, i, array) => {
        return character[category] >= (array.length - array.length/4);
      })
    })
  }

  revealCharacter() {
    let chosenCharacterIndex = Math.round(Math.random() * Math.floor(this.state.charactersLeft.length -1))
    this.setState({
      chosenCharacter: this.state.charactersLeft[chosenCharacterIndex]
    })
  }

  render() {
    return (
      <div className='character-quiz-page'>
        <h2>Take the quiz to find out which character you are!</h2>
        <button onClick={() => this.startQuiz()}>Start the Quiz</button>
        <QuizQuestion currentQuestion={this.state.quizQuestions[this.state.currentQuestionIndex]}
          nextQuestion={this.nextQuestion}/>
      </div>
    )
  }
}

export default CharacterQuiz;