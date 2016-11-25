import React, { Component, PropTypes  } from 'react';
import Circle               from './Circle';
import { connect }          from 'react-redux';
import * as actions         from '../actions';

@connect(null, actions)
export default class App extends Component {
  
  static propTypes = {
    getColors: PropTypes.func.isRequired,
  }

  renderCircles(){
    let circlesAttribute = [
                            {top: 150, right: 1100, height:150, width:150 },
                            {top: 110, right: 660, height:300, width:300 },
                            {top: 420, right: 350, height:250, width:250 },
                            {top: 90, right: 200, height:100, width:100 },
                            {top: 200, right: 50, height:80, width:80 }
                           ]

    let circleToRender = circlesAttribute.map((attr,i)=>{
      return <Circle 
                handleClick={this.handleClick.bind(this,i+1)} 
                key={i+1} 
                number={i+1} 
                coord={attr}
              />
    })

    return circleToRender;
  }

  handleClick(i){
    this.props.getColors(i)
  }

  render() {
    return (
      <div>
        {this.renderCircles()}
      </div>
    );
  }
}
