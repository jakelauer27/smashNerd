import React, { Component } from 'react';
import './styles/main.scss';
 
class Search extends Component {
  render() {
    return (
      <div>
        <input onKeyUp={e => this.props.search(e.target.value)} 
          className='search-input' 
          placeholder='search by name' 
          type='text' />
        <div className='suggestions-container'>
          <div className='suggestions'>
            {
              this.props.suggestions.map((suggestion, i)=> {
                if (this.props.suggestions.length < 58) {
                  return <li className={`suggestion suggestion${i}`}
                    onClick={e => {
                      e.target.parentElement.parentElement.previousElementSibling.value = e.target.innerText;
                      this.props.search(e.target.innerText);
                    }
                    }>{suggestion}</li>;
                }
              })
            }
          </div>
        </div>
      </div>
    );
  }
}




export default Search;