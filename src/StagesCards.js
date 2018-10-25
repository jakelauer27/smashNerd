import React, { Component } from 'react';
import './styles/App.css';


class StagesCards extends Component {
  constructor() {
    super();
    this.state = {
      stages: []
    }
  }


  render() {
    if(this.props.stage === '') {
      return ( <div></div> )
    } else return (
      <div className='stage-info-card' >
          <section className='stage-card-main' >
            <h1 className='stage-card-name'>{this.props.stage.name}</h1>
            <img className='stage-card-image' src={this.props.stage.stage_image} />
          </section>
          <section className='stage-cards-details'> 
            <p className='stage-cards-universe-name'>{this.props.stage.universe.name}</p>
            <a href={this.props.stage.smash_wiki} className='stage-card-info-link'>Learn More</a>
          </section>
          <section className='stage-game-availability'>
            {
            Object.keys((this.props.stage)).map((key) => {
              if (typeof this.props.stage[key] === 'boolean') {
                let value = 'No' 
                 if (this.props.stage[key]) {
                 value = 'Yes'
                 } 
                 return ( <p className={`stage-cards-${key}`}>{value}</p> )
               }
             })
            }
          </section>
      </div>
      )
  }
}


                       

export default StagesCards;