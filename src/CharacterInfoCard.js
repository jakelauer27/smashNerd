import React, { Component } from 'react';
import './styles/App.css';

class CharacterInfoCard extends Component {
 constructor() {
   super();
   this.state = {
     characters: []
   }
 }

 // componentDidMount() {
 //   fetch('http://whateverly-datasets.herokuapp.com/api/v1/characters')
 //     .then(response => response.json())
 //     .then(characters => {
 //       this.setState({
 //       characters: characters.characters
 //       })
 //     })
 //     .catch(error => console.log(error))
 // }

//add event listener to div
//onClick, target character's object
//character's info card renders to DOM


  render() {
    console.log('this.props:', this.props.character)
    if(this.props.character === '') {
      return ( <div></div> )
    } else return (
      <div className='character-info-card'>
        {
          <div className='div-wrapper'>
            <section className='character-card-image-section'>
                      <img className='character-card-info-image' src={this.props.character.images.large} />
                    </section>
                    <section className='character-card-info-stats'>
                       <h1 className='character-card-info-name'>{this.props.character.name}</h1>

                      <div className='character-stats-div'>
                        <p className='character-card-title-universe'>Universe</p>
                        <p className='character-card-info-universe'>{this.props.character.universe.name}</p>
                      </div>

                      <div className='character-stats-div'>
                        <p className='character-card-title-tier'>Tier</p>
                        <p className='character-card-info-tier'>{this.props.character.tier.tier}</p>
                      </div>

                      <div className='character-stats-div'>
                        <p className='character-card-title-rank'>Rank</p>
                        <p className='character-card-info-rank'>{this.props.character.tier.rank}</p>
                      </div>

                      <div className='character-stats-div'>
                        <p className='character-card-title-weight'>Weight Class</p>
                        <p className='character-card-info-weight'>{this.props.character.weight.class}</p>
                      </div>

                      <div className='character-stats-div'>
                        <p className='character-card-title-pros'>Pros</p>
                        <p className='character-card-info-pros'>{this.props.character.pros.map(pro => pro)}</p>
                      </div>

                      <div className='character-stats-div'>
                        <p className='character-card-title-cons'>Cons</p>
                        <p className='character-card-info-cons'>{this.props.character.cons.map(con => con)}</p>
                      </div>

                      <p className='character-card-info-link'><a href="www.link-to-wiki.com">{this.props.character.smash_wiki}</a> </p>
                    </section>
                    </div>
  
        }
      </div>
    )
  }
}









export default CharacterInfoCard;