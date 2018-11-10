import './styles/main.scss';
import React, { Component } from 'react';


class QuizQuestion extends Component {
  constructor() {
    super();
    this.state = {
      chosenAnswer: '',
    } 
  }

  chooseAnswer(e) {
    this.setState({
      chosenAnswer: e.target.id
    })
  }

  render() {
    if (!this.props.currentQuestion) {
      return <div className='none'></div>
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
            <div className='answer'>
               <input type='radio' 
                value={answer} 
                name='answers' 
                id={i}
                onClick={(e) => this.chooseAnswer(e)} />
                <label for={i}>{answer}</label>
            </div>
          ) 
        })
      }
      </div>
      <button onClick={(e) => this.props.nextQuestion(this.state.chosenAnswer, e.target.innerText)}>{this.props.currentQuestion.next}</button>
    </div>
   )
  }
}


                       

export default QuizQuestion;