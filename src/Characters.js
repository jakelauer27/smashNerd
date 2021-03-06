import React, { Component } from 'react';
import './styles/main.scss';
import CharacterInfoCard from './CharacterInfoCard.js';
import Search from './Search.js';
import Filter from './Filter.js';
import Universe from './Universe';
import Trie from '@jake.lauer27/autocomplete';
import LoadingElement from './LoadingElement';
var imagesLoaded = require('imagesloaded');

class Characters extends Component {
  constructor() {
    super();
    this.state = {
      characterList: [],
      card: '',
      characters: [],
      currentCharacter: '',
      universe: 'all',
      suggestions: [],
      loading: true
    };
    this.trie = new Trie();
  }

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/characters')
      .then(response => response.json())
      .then(data => {
        this.trie.populate(data.characters.map(character => character.name));
        var dataset = data.characters.map((character, i) => {
          let rank = 59;

          data.characters.forEach(compare => {
            if (character.speeds.run_speed + 
                character.speeds.air_speed + 
                character.speeds.initial_dash 
                >= compare.speeds.run_speed +  
                compare.speeds.air_speed + 
                compare.speeds.initial_dash) {
              rank --;
            }
          });
          character.speeds.speed_rank = rank;
          character.index = i;
          return character;
        });
        this.setState({
          characterList: dataset,
          characters: dataset
        });
        imagesLoaded( '.characters-grid', { background: true }, () => {
          this.setState({
            loading: false
          })
        }); 
      })
      .catch(error => console.log(error));     
  }

  search = (searchInput) => {
    let filteredCharacters = this.state.characterList.filter((character) => {  
      return character.name.toUpperCase().includes(searchInput.toUpperCase());
    });

    document.querySelector('.filter').value = 'All';
    this.setState({
      characters: this.setIndex(filteredCharacters),
      universe: 'all',
      suggestions: this.trie.suggest(searchInput)
    });
  }

  selectCharacter(e) {
    let character = this.state.characters.find((character) => {
      return character.index === parseInt(e.target.classList[0]);
    });

    this.setState({
      currentCharacter: parseInt(e.target.classList[0]),
      card: character
    });
  }

  setIndex(array) {
    return array.map((character, i) => {
      character.index = i;
      return character;
    });
  }

  scrollCard = (num) => {
    var newNum = num;
    let character = this.state.characters.find((character) => {
      if (this.state.currentCharacter === 0 && num === -1) {
        newNum = this.state.characters.length - 1;
      } else if (this.state.currentCharacter === 
                this.state.characters.length - 1 
                && num === 1) {
        newNum = -(this.state.characters.length - 1);
      }
      return character.index === this.state.currentCharacter + newNum;
    });

    this.setState ({
      currentCharacter: this.state.currentCharacter + newNum,
      card: character
    });
  }

  removeCard = (e) => {
    if (e.target.classList.contains('delete')) {
      this.setState({
        card: ''
      });
    }
  }

  filterByUniverse = (universe) => {
    let filteredCharacters;

    if (universe === 'all') {
      filteredCharacters = this.state.characterList;
    } else {
      filteredCharacters = this.state.characterList.filter((character) => {  
        return character.universe.name === universe;
      });
    }
    document.querySelector('.search-input').value = '';
    this.setState({
      characters: this.setIndex(filteredCharacters),
      universe
    });
  }

  distillUniverses() {
    let universes = this.state.characterList.map(character => character.universe.name);
    let filteredUniverses = [];

    universes.forEach((universe) => {
      if (filteredUniverses.indexOf(universe) === -1) {
        filteredUniverses.push(universe);
      }
    });
    return filteredUniverses;
  }

  render() {
    return (
      <div className='characters-page'>
        <div className='search-container'>
          <Search search={this.search}
            suggestions={this.state.suggestions}/>
          <Filter  universes={this.distillUniverses()}
            filterByUniverse={this.filterByUniverse} />
        </div>
        <Universe universe={this.state.universe}/>
        <div className='grid-container'>
          <div className="characters-grid">
            {
              this.state.characters.map((character) => {
                return (
                  <div onClick={e => this.selectCharacter(e)} 
                    className={`${character.index} character-preview-card`} 
                    key={character.index}
                    style={{'backgroundImage': `url(${character.images.icon})`}}>
                    <h2 onClick={e => this.selectCharacter(e)} 
                      className={`${character.index} preview-card-name`}>
                      {character.name}
                    </h2>
                  </div>
                );    
              })
            }
            <CharacterInfoCard character={this.state.card} 
              scrollCard={this.scrollCard}
              removeCard={this.removeCard}/>
          </div>
          <LoadingElement loading={this.state.loading}/>
        </div>
      </div>
    );
  }
}

export default Characters;





