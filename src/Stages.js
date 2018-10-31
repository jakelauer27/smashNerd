import React, { Component } from 'react';
import './styles/main.scss';
import StagesCards from './StagesCards.js';
import Search from './Search.js';
import Filter from './Filter.js';
import Universe from './Universe';
import Trie from '@jake.lauer27/autocomplete';

class Stages extends Component {
  constructor() {
    super();
    this.state = {
      stageList: [],
      stages: [],
      card: '',
      currentStage: '',
      universe: 'all',
      suggestions: []
    }; 
    this.trie = new Trie();
  }

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/stages')
      .then(response => response.json())
      .then(stages => {
        this.trie.populate(stages.stages.map(stage => stage.name));
        var dataset = stages.stages.map((stage, i) => {
          stage.index = i;
          return stage;
        });

        this.setState({
          stageList: dataset,
          stages: dataset
        });
      })
      .catch(error => console.log(error));
  }

  selectStage(e) {
    let stage = this.state.stages.find((stage) => {
      return stage.index === parseInt(e.target.classList[0]);
    });

    this.setState({
      currentStage: parseInt(e.target.classList[0]),
      card: stage
    });
  }

  setStageIndex() {
    this.setState({
      stages: this.state.stages.map((stage, i) => {
        stage.index = i;
        return stage;
      })
    });
  }

  removeCard = (e) => {
    if (e.target.classList.contains('delete')) {
      this.setState({
        card: ''
      });
    }
  }

  scrollStageCard = (num) => {
    let newNum = num;
    let stage = this.state.stages.find((stage) => {
      if (this.state.currentStage === 0 && num === -1) {
        newNum = this.state.stages.length - 1;
      } else if (this.state.currentStage === this.state.stages.length - 1 && num === 1) {
        newNum = -(this.state.stages.length - 1);
      }
      return stage.index === this.state.currentStage + newNum;
    });

    this.setState ({
      currentStage: this.state.currentStage + newNum,
      card: stage
    }); 
  }

  filterByUniverse = (universe) => {
    let filteredStages;

    if (universe === 'all') {
      filteredStages = this.state.stageList;
    } else {
      filteredStages = this.state.stageList.filter((stage) => {  
        return stage.universe.name === universe;
      });
    }
    document.querySelector('.search-input').value = '';
    this.setState({
      stages: this.setIndex(filteredStages),
      universe
    });
  }

  distillUniverses() {
    let universes = this.state.stageList.map(stage => stage.universe.name);
    let filteredUniverses = [];

    universes.forEach((universe) => {
      if (filteredUniverses.indexOf(universe) === -1) {
        filteredUniverses.push(universe);
      }
    });
    return filteredUniverses;
  }

  setIndex(array) {
    return array.map((stage, i) => {
      stage.index = i;
      return stage;
    });
  }

  search = (searchInput) => {
    let filteredStages = this.state.stageList.filter((stage) => {  
      return stage.name.toUpperCase().includes(searchInput.toUpperCase());
    });

    document.querySelector('.filter').value = 'All';
    this.setState({
      stages: this.setIndex(filteredStages),
      suggestions: this.trie.suggest(searchInput)
    });
  }

  render() {
    return (
      <div className='stages-page'>
        <div className='search-container'>
          <Search search={this.search}
            suggestions={this.state.suggestions} />
          <Filter universes={this.distillUniverses()}
            filterByUniverse={this.filterByUniverse} />
        </div>
        <Universe universe={this.state.universe}/>
        <section className='stages-body'>
          {  
            this.state.stages.map((stage) => {
              return (
                <div onClick={e => this.selectStage(e)} 
                  className={`${stage.index} stage-cards`} 
                  key={stage.name} 
                  style={{'backgroundImage': `url(${stage.stage_image})`}}>
                  <h2 onClick={e => this.selectStage(e)} 
                    className={`${stage.index} stage-name`}>{stage.name}
                  </h2>
                </div>
              );
            })
          } 
          <StagesCards  stage={this.state.card} 
            scrollStageCard={this.scrollStageCard}
            removeCard={this.removeCard} />
        </section>
      </div> 
    );
  }
}



export default Stages;






  