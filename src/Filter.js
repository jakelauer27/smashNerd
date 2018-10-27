import React, { Component } from 'react';
import './styles/main.scss';

class Filter extends Component {
  render() {
    return(
      <select onChange={e => this.props.filterByUniverse(e.target.value)} className='filter'>
        {
          this.props.universes.map((universe) => {
            return <option value={universe} className='filter-option'>{universe}</option>
          })
        }
      </select>
      )
  }
}







export default Filter;