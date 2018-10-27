import React, { Component } from 'react';
import { categories } from './data';
import CompareItem from './CompareItem'
import './styles/main.scss';
import { CSSTransitionGroup } from 'react-transition-group';


class Compare extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      highlight: 'Name',
      up: '',
      rotate: '',
      highlight: 'Name'

    }
  }

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/characters')
    .then(response => response.json())
    .then(data => {
      this.setState({
        characters: data.characters
      })
    })
    .catch(error => console.log(error))
  }

  sortTable(e, sortKey, sortKey2) {
    var sortedData;
    if (e.target.classList.contains('up')) {
      sortedData = this.sortDown(e);
    } else {
      sortedData = this.sortUp(e, sortKey, sortKey2);
    }
    this.setState({
      characters: sortedData,
      highlight: e.target.classList[0],
      up: e.target.classList[0], 
      rotate: e.target.classList[0]
    })
  }

  sortUp(e, sortKey, sortKey2) {
    return this.state.characters.sort( (a, b) => {
      if (sortKey2) {
        if(a[sortKey][sortKey2] > b[sortKey][sortKey2]) { return -1;}
        if(a[sortKey][sortKey2] < b[sortKey][sortKey2]) {return 1;}
        return 0;
      }
      if(a[sortKey] > b[sortKey]) {return -1;}
      if(a[sortKey] < b[sortKey]) {return 1;}
      return 0;
    })
  }

  sortDown(e) {
    return this.state.characters.reverse();
  }

  render() {
    return (
      <div className='compare-page'>
        <h1 className='compare-header'>Compare</h1>
        <div className='table-container'>
          <table className='character-grid'>
            <tbody>
            <tr className='table-header'>
              <th><img className='compare_smash_logo'src='./images/universe_icons/flame_smash_bros.svg'/></th>
              {
                categories.map((category, index) => {
                  let highlight = '';
                  let up = '';
                  let rotate = '';
                  if (this.state.highlight === category.name) {
                    highlight = 'highlight';
                    up = 'up';
                    rotate = 'rotate-down'
                  }
                  return <th onClick={e => this.sortTable(e, category.key1, category.key2)} className={`${category.name} ${up} ${highlight}`} key={index}>
                          {category.name} 
                          <span className='icon-span'><i className={`${category.name} arrow fas fa-caret-right ${up} ${rotate}`}></i></span>
                        </th>
              })
              }
            </tr>
              {
                this.state.characters.map( (character, i) => {
                  var even = 'even'
                  let counter = 'n';
                  if (character.counter) {
                    counter = 'y';
                  } 
                  if ( (i + 2) % 2 !== 0) {
                    even = 'odd';
                  }
                  return <CompareItem character={character} key={i}
                                      counter={counter} 
                                      row={even}
                                      highlight={this.state.highlight}/>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Compare;