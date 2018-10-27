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
}

  componentDidMount(){
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/stages')
      .then(response => response.json())
      .then(stages => {
        this.setState({
          stages: stages.stages
        })
      })
      .catch(error => console.log(error));
    }

    selectStage(e) {
      let stage = this.state.stages.find((stage) => {
        return stage.name.replace(/\s/g, '') === e.target.classList[0];
      })
      this.setState({
        currentStage: e.target.classList[0],
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
          return <div onClick={e => this.selectStage(e)} className={`${stage.name.replace(/\s/g, '')} stage-cards`} key={stage.name}>
                   <h2 onClick={e => this.selectStage(e)} className={stage.name.replace(/\s/g, '')}>{stage.name}</h2>
                   <img onClick={e => this.selectStage(e)} className={`${stage.name.replace(/\s/g, '')} stage-image`} src={stage.stage_image} />
                 </div>
        })
      } 
      <StagesCards stage={this.state.card}/>
      </section>
      </div> 
    )
  }
}



export default Stages;






  