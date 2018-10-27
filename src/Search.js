import React, { Component } from 'react';
import './styles/main.scss';
 



  class Search extends Component {
      render() {
       return (
        <form className='search-form'>
          <input onKeyUp={e => this.props.search(e.target.value)} className='search-input' placeholder='search' type='text' />
        </form>
      )
     }
  }




  export default Search;