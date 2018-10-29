import React, { Component } from 'react';
import { cardCategories } from './data';
import { cardProsCons } from './data';
import { letterSuperScripts} from './data'
import './styles/main.scss';

class CharacterInfoCard extends Component {

  addSuperScript(rank) {
    if (typeof rank === 'number') {
      let superScript = letterSuperScripts.find( (script, i) => {
        let numArray = [...rank.toString()];
        return script.num === parseInt(numArray[numArray.length - 1]);
      })
      return <h2 className={`card card-speed-value card-value`}>
      {rank}<span className='super-script'>{superScript.script}</span></h2>;
    }
    return rank;
  }

  render() {
    if(!this.props.character) {
      return ( <div className='none'></div> )
    } else return (
      <div className='arrow-wrapper'>
      <div className='character-info-card'>
        <div className='triangle'></div>
          <div className='card top-row'>
          <section className='card card-name-container'>
            <h1 className='card card-name'>{this.props.character.name}</h1> 
            <h2 className='card card-universe'>{this.props.character.universe.name}</h2> 
          </section>
          <section className='card tier-container'>
            <h2 className='card card-tier-label'>Tier:</h2> 
            <h1 className='card card-tier' id={this.props.character.tier.tier}>{this.props.character.tier.tier}</h1> 
          </section>
          </div>
          <div className='main-card-content'>
            <object className='card-icon' type="image/svg+xml" data={this.props.character.universe.icon}></object>
            <img className='card card-image' src={this.props.character.images.large} />
            <div className='main-card-stats'>
              <section className='card card-middle-tier-container'>
                {
                  cardCategories.map( category => {
                    return <div className='character-stats-div'>
                              <h3 className={`card card-${category.name.toLowerCase()}-label card-label`}>
                              {category.name}</h3>
                              <h2 className={`card card-${category.name.toLowerCase()}-value card-value`}>
                              {this.addSuperScript(this.props.character[category.key1][category.key2])}</h2>
                          </div>
                  })
                }
                </section>
                <section className='pro-con-container'>
                {
                  cardProsCons.map( category => {
                    return <section className='card stat-container'>
                              <h3 className={`card card-${category.name.toLowerCase()}-label card-label`}>
                              {category.name}</h3>
                              {
                                this.props.character[category.key].map( item => {
                                  return <p className={`card card-${category.key}`}>{`-${item}`}</p>
                                })
                              }
                          </section>
                  } )
                }
                </section>
            <a href={this.props.character.smash_wiki} target='_blank' className='card card-link'>Learn More</a>
          </div>
        </div>
      </div>
        <button onClick={e => this.props.scrollCard(-1)} className='left-button scroll-button'><i className="fas fa-angle-left"></i></button>
        <button onClick={e => this.props.scrollCard(1)} className='right-button scroll-button'><i className="fas fa-angle-right"></i></button>
        <button onClick={e => this.props.removeCard(e)} className='delete delete-button scroll-button'><i className="delete fas fa-times"></i></button>
      </div>
    )
  }
}

export default CharacterInfoCard;