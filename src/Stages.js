import React, { Component } from 'react';
import './styles/main.scss';
import StagesCards from './StagesCards.js';
import Search from './Search.js';
import Filter from './Filter.js'

class Stages extends Component {
  constructor() {
    super();
    this.state = {
      stageList: [],
      stages: [],
      card: '',
      currentStage: ''
    } 
    this.scrollStageCard = this.scrollStageCard.bind(this)
    this.filterByUniverse = this.filterByUniverse.bind(this);
}

  componentDidMount(){
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/stages')
      .then(response => response.json())
      .then(stages => {
        var dataset = stages.stages.map((stage, i) => {
            stage.index = i;
            return stage;
          })
        this.setState({
          stageList: dataset,
          stages: dataset
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

  filterByUniverse(universe) {
    let filteredStages = this.state.stageList.filter((stage) => {  
      return stage.universe.name === universe
    })
    this.setState({
      stages: filteredStages
    })
  }

  distillUniverses() {
    let universes = this.state.stageList.map(stage => stage.universe.name);
    let filteredUniverses = [];
    universes.forEach((universe) => {
     if(filteredUniverses.indexOf(universe) === -1) {
      filteredUniverses.push(universe)
     }
    })
    return filteredUniverses;
  }


  render() {
    return (
      <div className='stages-page'>
      <Filter universes={this.distillUniverses()}
              filterByUniverse={this.filterByUniverse} />
        <h1 className='stages-header'>STAGES</h1>
      <section className='stages-body'>
      {  
        this.state.stages.map((stage) => {
          return <div onClick={e => this.selectStage(e)} className={`${stage.index} stage-cards`} key={stage.name}>
                   <img onClick={e => this.selectStage(e)} className={`${stage.index} stage-image`} src={stage.stage_image} />
                   <h2 onClick={e => this.selectStage(e)} className={stage.index}>{stage.name}</h2>
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






  