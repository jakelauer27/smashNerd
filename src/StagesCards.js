import './styles/main.scss';
import React, { Component } from 'react';




class StagesCards extends Component {

  render() {
    if(!this.props.stage) {
      return ( <div className='none'></div> )
    } else return (
      <div className='arrow-wrapper'>
        <div className='stage-info-card' >
        <div className='triangle'></div>
          <section className='stage-card-main' >
              <img className='stage-card-image' src={this.props.stage.stage_image} />
          </section>
          <section className='stage-card-details'> 
            <h1 className='stage-card-name'>{this.props.stage.name}</h1>
            <p className='stage-card-universe-name'>{this.props.stage.universe.name}</p>
            <h2 className='stage-card-available-label'>Now Available On:</h2>
            <div className='labels'>
              <p classname='stage-card-label'>DLC</p>
              <p classname='stage-card-label'>Nintendo 3DS</p>
              <p classname='stage-card-label'>Wii U</p>
            </div>
            <section className='stage-game-availability'>
              {
              Object.keys((this.props.stage)).map((key, index) => {
               if (typeof this.props.stage[key] === 'boolean') {
                let value = 'No' 
                 if (this.props.stage[key]) {
                 value = 'Yes'
                 } 
                 return ( <p className={`stage-cards-${key}`} key={index}>{value}</p> )
                 }
               })
              }
            </section>
          </section>
          <a href={this.props.stage.smash_wiki} className='stage-card-info-link'>Learn More</a>
        </div>
        <button onClick={e => this.props.scrollStageCard(-1)} className='stage-left-button scroll-button'><i class="fas fa-angle-left"></i></button>
        <button onClick={e => this.props.scrollStageCard(1)} className='stage-right-button scroll-button'><i class="fas fa-angle-right"></i></button>
        <button onClick={e => this.props.removeCard(e)}className=' delete stage-delete-button scroll-button'><i onClick={e => this.props.removeCard(e)} class="delete fas fa-times"></i></button>
      </div>
      )
  }
}


                       

export default StagesCards;