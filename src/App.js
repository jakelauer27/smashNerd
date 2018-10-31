import React, { Component } from 'react';
import Landing from './Landing';
import Characters from './Characters';
import Compare from './Compare';
import Stages from './Stages';
import './styles/main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Characters: false,
      Stages: false,
      Compare: false,
    };
    this.keys = Object.keys(this.state);
  }

  renderSection = (e) => {
    const section = e.target.classList[0];
    this.setState({
      Characters: false,
      Stages: false,
      Compare: false,
      [section]: true
    });
  }

  render() {
    return (
      <div className="App">
        <Landing renderCharacters={this.renderSection}/>
        <header className="header">
          <img src='./images/universe_icons/flame_smash_bros.svg' className='smash-small' />
          <div className="header-buttons">
            <button className='Compare header-button' onClick={this.renderSection}>COMPARE</button>
            <button className='Stages header-button' onClick={this.renderSection}>STAGES</button>
            <button className='Characters header-button' onClick={this.renderSection}>CHARACTERS</button>
          </div>
        </header>
        {
          this.keys.map( key => {
            if (this.state[key]) {
              switch (key) {
              case 'Characters':
                return <Characters key={key} />;
              case 'Stages':
                return <Stages key={key} />;
              case 'Compare':
                return <Compare key={key}/>;
              }
            }
          })
        }
      </div>
    );
  }
}

export default App;
