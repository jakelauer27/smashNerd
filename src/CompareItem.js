import React, { Component }from 'react';
import { categories } from './data';
import './styles/App.css';

class CompareRow extends Component { 
  constructor() {
    super();
    this.state = {
      highlight: 'name'
    }
  }

  render() {
    return (
      <tr>
        <td className={this.props.row}><img src={this.props.character.images.small_icon}/></td>
        {
          categories.map( category => {
            if (!category.key2) {
              return <td className={this.props.row}>{this.props.character[category.key1]}</td>
            } else {
              return <td className={this.props.row}>{this.props.character[category.key1][category.key2]}</td>
            }
          })
        }
      </tr>
    )
  }
}



export default CompareRow;