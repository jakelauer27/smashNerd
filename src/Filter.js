import React, { Component } from 'react';
import './styles/main.scss';

class Filter extends Component {
  render() {
    return (
      <div className='filter-container'>
        <select onChange={e => this.props.filterByUniverse(e.target.value)} className='filter' placeholder='Filter by Universe'>
          <option value='all' className='filter-option'>All</option>
          {
            this.props.universes.map((universe) => {
              return <option value={universe} className='filter-option'>{universe}</option>
            })
          }
        </select>
      </div>

    );
  }
}


export default Filter;