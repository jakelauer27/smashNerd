import React, { Component } from 'react';
import characters from './data';
import CompareItem from './CompareItem'
import './styles/App.css';

class Compare extends Component {
  constructor() {
    super();
    this.state = {
      data: characters.slice(0, characters.length)
    }
  }

  sortTable(e, sortKey, sortKey2) {
    var sortedData;
    if (e.target.classList.contains('up')) {
      sortedData = this.sortUp(e, sortKey, sortKey2)
    } else {
      sortedData = this.sortDown(e, sortKey, sortKey2)
    }
    this.setState({
      data: sortedData
    })
  }

  sortUp(e, sortKey, sortKey2) {
    e.target.classList.remove('up')
    return this.state.data.sort( (a, b) => {
      if (sortKey2) {
        if(a[sortKey][sortKey2] === 'N/A') {
          return 1
        }
        if(a[sortKey][sortKey2] > b[sortKey][sortKey2]) {
          return -1;
        }
        if(a[sortKey][sortKey2] < b[sortKey][sortKey2]) {
          return 1;
        }
        return 0;
      }
      if(a[sortKey] > b[sortKey]) {
        return -1;
      }
      if(a[sortKey] < b[sortKey]) {
        return 1;
      }
      return 0;
    })
  }

  sortDown(e, sortKey, sortKey2) {
    e.target.classList.add('up')
    return this.state.data.sort( (a, b) => {
      if (sortKey2) {
        if(a[sortKey][sortKey2] === 'N/A') {
          return 1
        }
        if(a[sortKey][sortKey2] < b[sortKey][sortKey2]) {
          return -1;
        }
        if(a[sortKey][sortKey2] > b[sortKey][sortKey2]) {
          return 1;
        }
        return 0;
      }
      if(a[sortKey] < b[sortKey]) {
        return -1;
      }
      if(a[sortKey] > b[sortKey]) {
        return 1;
      }
      return 0;
    })
  }

  render() {
    return (
      <div className='compare-page'>
        <h1 className='compare-header'>Compare</h1>
        <table className='character-grid'>
          <tbody>
          <tr>
            <th><img className='compare_smash_logo'src='./images/universe_icons/flame_smash_bros.svg'/></th>
            <th onClick={e => this.sortTable(e, 'name')} 
                className='up table-header-name'>Name</th>
            <th className='up table-header-tier'>Tier</th>
            <th onClick={e => this.sortTable(e, 'tier', 'rank')} 
                className='up table-header-rank'>Rank</th>
            <th onClick={e => this.sortTable(e, 'world_stats', 'wins')} 
                className='up table-header-wins'>Win</th>
            <th onClick={e => this.sortTable(e, 'world_stats', 'losses')} 
                className='up table-header-losses'>Loss</th>
            <th onClick={e => this.sortTable(e, 'weight', 'class')} 
                className='up table-header-weight-class'>Weight Cls</th>
            <th onClick={e => this.sortTable(e, 'weight', 'weight_value')} 
                className='up table-header-weight'>Wt</th>
            <th onClick={e => this.sortTable(e, 'jump_height')} 
                className='up table-header-jump-height'>Jmp Ht</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'initial_dash')} 
                className='up table-header-dash'>Dash</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'run_speed')} 
                className='up table-header-run'>Rn Spd</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'air_speed')} 
                className='up table-header-air'>Air Spd</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'fall_speed')} 
                className='up table-header-fall'>Fl Spd</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'fast_fall_speed')} 
                className='up table-header-fast-fall'>Fst Fl Spd</th>
            <th onClick={e => this.sortTable(e, 'counter')} 
                className='up table-header-counter'>Ctr</th>
            <th onClick={e => this.sortTable(e, 'strongest_smash', 'attack')} 
                className='up table-header-smash'>Strongest Smash</th>
            <th onClick={e => this.sortTable(e, 'strongest_smash', 'damage')} 
                className='up table-header-smash-damage'>Smash Dmg</th>
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
                                    row={even}/>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Compare;