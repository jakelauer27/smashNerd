import React, { Component } from 'react';
import characters from './utils/data';
import quizQuestions from './utils/quizQuestions'
import LoadingElement from './LoadingElement';
import './styles/main.scss';
import QuizQuestion from './QuizQuestion';
import ChosenCharacter from './ChosenCharacter';
var imagesLoaded = require('imagesloaded');

const reformattedCharacters = JSON.parse(JSON.stringify(characters.characters.map((character) => {
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
  character.rank = character.tier.rank;
  character.speed_rank = rank;
  return character;
})))

class CharacterQuiz extends Component {
  constructor() {
    super();
    this.state = {
      charactersLeft: reformattedCharacters,
      chosenCharacter: '',
      currentQuestionIndex: -1,
      quizQuestions: JSON.parse(JSON.stringify(quizQuestions.quizQuestions))
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     charactersLeft: this.props.charactersArray
  //   })
  // }

  startQuiz = () => {
    this.setState({
      charactersLeft: reformattedCharacters,
      chosenCharacter: '',
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
        charactersLeft: this.state.charactersLeft.sort((a, b) => {
          return a[category] > b[category]
        }).filter((character, i, array) => {
          return i < array.length * 2/3 ;
        })
      })
      return
    }
    this.setState({
      charactersLeft: this.state.charactersLeft.sort((a, b) => {
        return a[category] < b[category]
      }).filter((character, i, array) => {
        return i < array.length * 2/3 ;
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
        <QuizQuestion currentQuestion={this.state.quizQuestions[this.state.currentQuestionIndex]}
          nextQuestion={this.nextQuestion}
          startQuiz={this.startQuiz}/>
        <ChosenCharacter chosenCharacter={this.state.chosenCharacter}
          startQuiz={this.startQuiz}/>
      </div>
    )
  }
}

export default CharacterQuiz;