import React, { Component } from 'react';
import './styles/main.scss';
import StagesCards from './StagesCards.js';


class Stages extends Component {
  constructor() {
    super();
    this.state = {
      stages: [],
      card: '',
      currentStage: ''
    } 
    this.scrollStageCard = this.scrollStageCard.bind(this)
}

  componentDidMount(){
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/stages')
      .then(response => response.json())
      .then(stages => {
        this.setState({
          stages: stages.stages.map((stage, i) => {
            stage.index = i;
            return stage;
          })
        })
      })
      .catch(error => console.log(error));
    }

    selectStage(e) {
      let stage = this.state.stages.find((stage) => {
        return stage.index === parseInt(e.target.classList[0]);
      })
      this.setState({
        currentStage: parseInt(e.target.classList[0]),
        card: stage
      })
    }

    setStageIndex() {
      this.setState({
        stages: this.state.stages.map((stage, i) => {
          stage.index = i;
          return stage;
        })
      })
    }

    scrollStageCard(num) {
        let stage = this.state.stages.find((stage) => {
          return stage.index === this.state.currentStage + num
        })
        this.setState ({
          currentStage: this.state.currentStage + num,
          card: stage
        }) 
    }


  render() {
    return (
      <div className='stages-page'>
        <h1 className='stages-header'>STAGES</h1>
      <section className='stages-body'>
      {  
        this.state.stages.map((stage) => {
          return <div onClick={e => this.selectStage(e)} className={`${stage.index} stage-cards`} key={stage.name}>
                   <h2 onClick={e => this.selectStage(e)} className={stage.index}>{stage.name}</h2>
                   <img onClick={e => this.selectStage(e)} className={`${stage.index} stage-image`} src={stage.stage_image} />
                 </div>
        })
      } 
      <StagesCards stage={this.state.card} scrollStageCard={this.scrollStageCard}/>
      </section>
      </div> 
    )
  }
}



export default Stages;






  