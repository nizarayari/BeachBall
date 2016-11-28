import React, { Component, PropTypes  } from 'react';
import Circle                           from './circle';
import { connect }                      from 'react-redux';
import * as actions                     from '../actions'

@connect(mapStateToProps, actions)
export default class App extends Component {
  

  static propTypes = {
    getColors: PropTypes.func.isRequired,
    addCircleToTransform : PropTypes.func.isRequired,
    circlesToTransform : PropTypes.array.isRequired
  }

  renderCircles(){
    const circlesAttribute = [
                            {top: 150, right: 1100, height:150, width:150 },
                            {top: 110, right: 660, height:300, width:300 },
                            {top: 420, right: 350, height:250, width:250 },
                            {top: 90, right: 200, height:100, width:100 },
                            {top: 200, right: 50, height:80, width:80 }
                           ]

    const circlesToRender = circlesAttribute.map((attr,i)=>{
      return <Circle 
                handleClick={this.handleClick.bind(this,i+1)} 
                key={i} 
                number={i+1} 
                coord={attr}
              />
    })

    return circlesToRender;
  }

  handleClick(circle){
    this.props.addCircleToTransform(circle)
    if(this.props.circlesToTransform.length === 0){
      this.props.getColors(circle)
    } 
  }

  render() {
    return (
      <div>
        {this.renderCircles()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    circlesToTransform:state.circlesToTransform
  }
}
