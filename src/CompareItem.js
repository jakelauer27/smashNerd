import React, { Component } from 'react';
import { categories } from './data';
import './styles/main.scss';

class CompareRow extends Component { 
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <tr>
        <td className={this.props.row}><img src={this.props.character.images.small_icon}/></td>
        {
          categories.map((category, index) => {
            let highlight = '';

            if (this.props.highlight === category.name) {
              highlight = 'highlight';
            }
            if (!category.key2) {
              return <td className={`${this.props.row} ${highlight}`} key={index}>{this.props.character[category.key1]}</td>;
            } else {
              return <td className={`${this.props.row} ${highlight}`} key={index}>{this.props.character[category.key1][category.key2]}</td>;
            }
          })
        }
      </tr>
    );
  }
}

export default CompareRow;