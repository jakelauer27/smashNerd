import React, { Component } from 'react';
import './styles/App.css';

class Stages extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    } 
}

  componentDidMount(){
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/stages')
      .then(response => response.json())
      .then(stages => {
        this.setState({
          data: stages.stages
        })
      })
      .catch(error => console.log(error));
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
                   <img src={stage.stage_image} class='stage-image' />
                 </div>
        })
      } 
      </section>
      </div> 
    )
  }
}



export default Stages;






  