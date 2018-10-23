import React, { Component } from 'react';
import Landing from './Landing';
import Characters from './Characters';
import Compare from './Compare';
import Stages from './Stages';
import './styles/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Characters: true,
      Stages: false,
      Compare: false,
    }
    this.keys = Object.keys(this.state)
  }

  renderSection = (e) => {
    const section = e.target.classList[0];
    this.setState({
      Characters: false,
      Stages: false,
      Compare: false,
      [section]: true
    })
  }

  render() {
    return (
      <div className="App">
        {/* <Landing /> */}
        <header>
          <button className='Characters header-button' onClick={this.renderSection}>Characters</button>
          <button className='Stages header-button'  onClick={this.renderSection}>Stages</button>
          <button className='Compare header-button' onClick={this.renderSection}>Compare</button>
        </header>
        {
          this.keys.map( key => {
            if (this.state[key]) {
              switch(key) {
                case 'Characters':
                return <Characters />
                case 'Stages':
                return <Stages />
                case 'Compare':
                return <Compare />
              }
            }
          })
        }
      </div>
    );
  }
}

export default App;
