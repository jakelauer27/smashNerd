import './styles/main.scss';
import React, { Component } from 'react';
import ChosenCharacter from './ChosenCharacter';

class QuizQuestion extends Component {
  constructor() {
    super();
    this.state = {
      chosenAnswer: false,
    }
  }

  chooseAnswer(e) {
    this.setState({
      chosenAnswer: e.target.id
    })
  }

  async onSubmitQuestionPending(e) {
    await this.props.nextQuestion(this.state.chosenAnswer, e.target.innerText)
  }

  submitAndReset(e) {
    let submission = this.onSubmitQuestionPending(e)
    submission.then(() => this.setState({
      chosenAnswer: false
    }))
  }

  render() {
    if (!this.props.currentQuestion) {
      return  (
        <div className='quiz-question-container'>
          <img className='quiz-image' src="./images/characters/mario.png"></img>
          <button onClick={() => this.props.startQuiz()}>
            <p>Start the Quiz</p>
            <i className='arrow fas fa-caret-right'></i>
          </button>
        </div>
      )
   }
   if (this.props.chosenCharacter) {
    return (
      <div className='quiz-question-container'>
        <ChosenCharacter chosenCharacter={this.props.chosenCharacter}
        startQuiz={this.props.startQuiz}/>
      </div>
    )
   }
   return (
    <div className='quiz-question-container'>
      {
      <h3 className='question'>
        {this.props.currentQuestion.question}
      </h3>
      }
      <div class='answer-list'>
      {
        this.props.currentQuestion.answers.map((answer, i) => {
          return (
            <div className='answer' key={i}>
               <input type='radio'
                value={answer}
                name='answers'
                checked={parseInt(this.state.chosenAnswer) === i}
                id={i}
                key={i}
                onChange={(e) => this.chooseAnswer(e)} />
                <label for={i}>{answer}</label>
            </div>
          )
        })
      }
      </div>
      <button disabled={!this.state.chosenAnswer}
        onClick={(e) => { this.submitAndReset(e) }}>
        <p>{this.props.currentQuestion.next}</p>
      </button>
    </div>
   )
  }
}




export default QuizQuestion;
