import React, { Component } from 'react';
import { stages } from './data';
import './styles/App.css';

class Stages extends Component {
  constructor() {
    super();
    this.state = {
      data: stages.slice(0, stages.length)
    } 
  }


  render() {
    return (
      <div className='stages-page'>
        <h1 className='stages-header'>STAGES</h1>
      <section className='stages-body'>
      {  
        this.state.data.map((stage) => {
          return <div className='stage-cards'>
                   <h2>{stage.name}</h2>
                 </div>
        })
      } 
      </section>
      </div> 
    )
  }
}



export default Stages;






  