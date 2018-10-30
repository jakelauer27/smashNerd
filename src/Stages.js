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
    this.removeCard = this.removeCard.bind(this);
    this.search = this.search.bind(this);
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

  removeCard(e) {
    if (e.target.classList.contains('stage-delete-button')) {
      console.log('howdy')
      this.setState({
        card: ''
      })
    }
  }

  scrollStageCard(num) {
    let newNum = num;
    let stage = this.state.stages.find((stage) => {
      if(this.state.currentStage === 0 && num === -1) {
        newNum = this.state.stages.length - 1;
      } else if(this.state.currentStage === this.state.stages.length - 1 && num === 1) {
        newNum = -(this.state.stages.length - 1);
      }
      return stage.index === this.state.currentStage + newNum;
    })
    this.setState ({
      currentStage: this.state.currentStage + newNum,
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

  setIndex(array) {
    return array.map((character, i) => {
      character.index = i;
      return character;
    })
  }

  search(searchInput) {
    let filteredStages = this.state.stageList.filter((stage) => {  
      return stage.name.toUpperCase().includes(searchInput.toUpperCase())
    })
    this.setState({
      stages: this.setIndex(filteredStages)
    })
  }

  render() {
    return (
      <div className='stages-page'>
        <div className='search-container'>
          <Filter universes={this.distillUniverses()}
              filterByUniverse={this.filterByUniverse} />
          <Search search={this.search} />
        </div>
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
      <StagesCards  stage={this.state.card} 
                    scrollStageCard={this.scrollStageCard}
                    removeCard={this.removeCard} />
      </section>
      </div> 
    )
  }
}



export default Stages;






  