import React, { Component } from 'react';
import { characters, categories } from './data';
import CompareItem from './CompareItem'
import './styles/App.css';


class Compare extends Component {
  constructor() {
    super();
    this.state = {
      data: characters.slice(0, characters.length),
      up: '',
      rotate: '',
      highlight: 'Name'

    }
  }

  sortTable(e, sortKey, sortKey2) {
    var sortedData;
    if (e.target.classList.contains('up')) {
      sortedData = this.sortDown(e);
    } else {
      sortedData = this.sortUp(e, sortKey, sortKey2);
    }
    this.setState({
      data: sortedData,
      highlight: e.target.classList[0],
      up: e.target.classList[0], 
      rotate: e.target.classList[0]
    })
  }

  sortUp(e, sortKey, sortKey2) {
    return this.state.data.sort( (a, b) => {
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
    return this.state.data.reverse();
  }

  render() {
    return (
      <div className='compare-page'>
        <h1 className='compare-header'>Compare</h1>
        <div className='table-container'>
          <table className='character-grid'>
            <tbody>
            <tr class='table-header'>
              <th><img className='compare_smash_logo'src='./images/universe_icons/flame_smash_bros.svg'/></th>
              {
                categories.map( category => {
                  let highlight = '';
                  let up = '';
                  let rotate = '';
                  if (this.state.highlight === category.name) {
                    highlight = 'highlight';
                    up = 'up';
                    rotate = 'rotate-down'
                  }
                  return <th onClick={e => this.sortTable(e, category.key1, category.key2)} className={`${category.name} ${up} ${highlight}`}>
                          {category.name} 
                          <span className='icon-span'><i className={`${category.name} arrow fas fa-caret-up ${up} ${rotate}`}></i></span>
                        </th>
              })
              }
            </tr>
              {
                this.state.data.map( (character, i) => {
                  var even = 'even'
                  let counter = 'n';
                  if (character.counter) {
                    counter = 'y';
                  } 
                  if ( (i + 2) % 2 !== 0) {
                    even = 'odd';
                  }
                  return <CompareItem character={character} 
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