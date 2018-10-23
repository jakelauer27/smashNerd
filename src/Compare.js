import React, { Component } from 'react';
import characters from './data';
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
        <h1>Compare</h1>
        <table className='character-grid'>
          <tbody>
          <tr>
            <th onClick={e => this.sortTable(e, 'name')} 
                className='up table-header-name'>Name</th>
            <th onClick={e => this.sortTable(e, 'tier', 'tier')} 
                className='up table-header-tier'>Tier</th>
            <th onClick={e => this.sortTable(e, 'tier', 'rank')} 
                className='up table-header-rank'>Rank</th>
            <th onClick={e => this.sortTable(e, 'world_stats', 'wins')} 
                className='up table-header-wins'>Wins</th>
            <th onClick={e => this.sortTable(e, 'world_stats', 'losses')} 
                className='up table-header-losses'>Losses</th>
            <th onClick={e => this.sortTable(e, 'weight', 'class')} 
                className='up table-header-weight-class'>Weight Class</th>
            <th onClick={e => this.sortTable(e, 'weight', 'weight_value')} 
                className='up table-header-weight'>Weight</th>
            <th onClick={e => this.sortTable(e, 'jump_height')} 
                className='up table-header-jump-height'>Jump Height</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'initial_dash')} 
                className='up table-header-dash'>Dash</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'run_speed')} 
                className='up table-header-run'>Run Speed</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'air_speed')} 
                className='up table-header-air'>Air Speed</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'fall_speed')} 
                className='up table-header-fall'>Fall Speed</th>
            <th onClick={e => this.sortTable(e, 'speeds', 'fast_fall_speed')} 
                className='up table-header-fast-fall'>Fast Fall Speed</th>
            <th onClick={e => this.sortTable(e, 'counter')} 
                className='up table-header-counter'>Counter</th>
            <th onClick={e => this.sortTable(e, 'strongest_smash', 'attack')} 
                className='up table-header-smash'>Strongest Smash</th>
            <th onClick={e => this.sortTable(e, 'strongest_smash', 'damage')} 
                className='up table-header-smash-damage'>Strongest Smash Damage</th>
          </tr>
            {
              this.state.data.map( (character, i) => {
                let counter = 'n';
                if (character.counter) {
                  counter = 'y';
                }
                return <tr>
                <td className={i}>
                  <span className='grid-icon'><img src={character.images.small_icon}/></span>
                  {character.name}</td>
                <td className={i}>{character.tier.tier}</td>
                <td className={i}>{character.tier.rank}</td>
                <td className={i}>{character.world_stats.wins}</td>
                <td className={i}>{character.world_stats.losses}</td>
                <td className={i}>{character.weight.class}</td>
                <td className={i}>{character.weight.weight_value}</td>
                <td className={i}>{character.jump_height}</td>
                <td className={i}>{character.speeds.initial_dash}</td>
                <td className={i}>{character.speeds.run_speed}</td>
                <td className={i}>{character.speeds.air_speed}</td>
                <td className={i}>{character.speeds.fall_speed}</td>
                <td className={i}>{character.speeds.fast_fall_speed}</td>
                <td className={i}>{counter}</td>
                <td className={i}>{character.strongest_smash.attack}</td>
                <td className={i}>{character.strongest_smash.damage}</td>
                 </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Compare;