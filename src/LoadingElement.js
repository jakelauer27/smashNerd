import React, { Component } from 'react';
import './styles/main.scss';

class LoadingElement extends Component {
  render() {
    if (!this.props.loading) {
      return <div className='none'></div>
    }
    return (
      <div className='loading-container'>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}


export default LoadingElement;