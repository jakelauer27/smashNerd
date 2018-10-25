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
        <div className='stage-wrap' >
          <section className='stage-card-image-wrap' >
            <img className='stage-card-image' src={this.props.stage.stage_image} />
          </section>
        </div>
      </div>
      )
  }


}








export default StagesCards;