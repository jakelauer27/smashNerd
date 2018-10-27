import React, { Component } from 'react';
import './styles/main.scss';
import CharacterInfoCard from './CharacterInfoCard.js';
import Search from './Search.js';
import Filter from './Filter.js'

class Characters extends Component {
 constructor() {
   super();
   this.state = {
    characterList: [],
    card: '',
    characters: [],
    currentCharacter: '',
    nextCharacter: ''
   }
   this.scrollCard = this.scrollCard.bind(this);
   this.removeCard = this.removeCard.bind(this);
   this.search = this.search.bind(this);
   this.filterByUniverse = this.filterByUniverse.bind(this);
 }

 componentDidMount() {
   fetch('http://whateverly-datasets.herokuapp.com/api/v1/characters')
     .then(response => response.json())
     .then(data => {
        var dataset = data.characters.map((character, i) => {
            let rank = 59;
            data.characters.forEach(compare => {
              if (character.speeds.run_speed + character.speeds.air_speed + character.speeds.initial_dash >= 
                  compare.speeds.run_speed +  compare.speeds.air_speed + compare.speeds.initial_dash) {
                rank --;
              }
            })
            character.speeds.speed_rank = rank;
            character.index = i;
            return character;
            })
        this.setState({
          characterList: dataset,
          characters: dataset
        })
     })
     .catch(error => console.log(error))
  }

  search(searchInput) {
    let filteredCharacters = this.state.characterList.filter((character) => {  
      return character.name.toUpperCase().includes(searchInput.toUpperCase())
    })
    this.setState({
      characters: filteredCharacters
    })
  }

  selectCharacter(e) {
    let character = this.state.characters.find((character) => {
      return character.index === parseInt(e.target.classList[0]);
    })
    this.setState({
      currentCharacter: parseInt(e.target.classList[0]),
      card: character
    })
  }

  setIndex() {
    this.setState({
      characters: this.state.characters.map((character, i) => {
        character.index = i;
        return character;
      })
    })
  }

scrollCard(num) {
      let character = this.state.characters.find((character) => {
      return character.index === this.state.currentCharacter + num;
    })
      this.setState ({
        currentCharacter: this.state.currentCharacter + num,
        card: character
      })
    }

  removeCard(e) {
    if (e.target.classList.contains('delete')) {
      this.setState({
        card: ''
      })
    }
  }

  filterByUniverse(universe) {
    let filteredCharacters = this.state.characterList.filter((character) => {  
      return character.universe.name === universe
    })
    this.setState({
      characters: filteredCharacters
    })
  }

  distillUniverses() {
    let universes = this.state.characterList.map(character => character.universe.name);
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
    <div className='characters-page'>
     <Search search={this.search}/>
     <Filter  universes={this.distillUniverses()}
              filterByUniverse={this.filterByUniverse} />
      <div className="characters-grid">
       {
         this.state.characters.map((character) => {
           return  <div onClick={e => this.selectCharacter(e)} className={`${character.index} character-preview-card`} key={character.index}
                    style={{'backgroundImage': `url(${character.images.icon})`}}>
                     <h2 onClick={e => this.selectCharacter(e)} className={`${character.index} preview-card-name`}>{character.name}</h2>
                   </div>
         })
       }

       <CharacterInfoCard character={this.state.card} 
                          scrollCard={this.scrollCard}
                          removeCard={this.removeCard}/>
       </div>
     </div>
   )
 }
}

export default Characters;





