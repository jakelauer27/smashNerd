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
      characters: true,
      stages: false,
      compare: false,
    }
  }

  renderCharacters = () => {
    this.setState({
      characters: true,
      stages: false,
      compare: false
    })
  }

  renderStages = () => {
    this.setState({
      characters: false,
      stages: true,
      compare: false
    })
  }

  renderCompare = () => {
    this.setState({
      characters: false,
      stages: false,
      compare: true
    })

  }

  render() {

    if (this.state.characters) {
      return (
        <div className="App">
          {/* <Landing /> */}
          <header class="header">
            <img src='images/universe_icons/red_icon_smash_bros.svg' class='smash-small' />
            <div className="header-buttons">
              <button className='characters' onClick={this.renderCharacters}>CHARACTERS</button>
              <button className='stages' onClick={this.renderStages}>STAGES</button>
              <button className='compare' onClick={this.renderCompare}>COMPARE</button>
            </div>
          </header>
          <Characters />
        </div>
      );
    }
    else if (this.state.stages) {
      return (
        <div className="App">
          {/* <Landing /> */}
          <header className="header">
            <img src='images/universe_icons/red_icon_smash_bros.svg' class='smash-small' />
            <div className="header-buttons">
              <button className='characters' onClick={this.renderCharacters}>CHARACTERS</button>
              <button className='stages' onClick={this.renderStages}>STAGES</button>
              <button className='compare' onClick={this.renderCompare}>COMPARE</button>
            </div>
          </header>
          <Stages />
        </div>
      );
    } else {
      return (
        <div className="App">
          {/* <Landing /> */}
          <header className="header">
            <img src='images/universe_icons/red_icon_smash_bros.svg' class='smash-small' />
            <div className="header-buttons">
              <button className='characters' onClick={this.renderSection}>CHARACTERS</button>
              <button className='stages' onClick={this.renderStages}>STAGES</button>
              <button className='compare' onClick={this.renderCompare}>COMPARE</button>
            </div>
          </header>
          <Compare/>
        </div>
      );
    }
  }
}

export default App;
