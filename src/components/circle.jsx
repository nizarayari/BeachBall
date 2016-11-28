import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import Radium                          from 'radium';
import * as actions                    from '../actions';
import Spinner                         from './spinner';

@connect(mapStateToProps,actions)
@Radium
export default class Circle extends Component {
  
  static propTypes = {
    number: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    coord:PropTypes.object.isRequired,
    circlesToTransform : PropTypes.array.isRequired,
    deleteCircleToTransform: PropTypes.func.isRequired,
    getColors: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps){
    const hasCirclesDeleted = nextProps.circlesToTransform.length < this.props.circlesToTransform.length;
    const hasCirclesAdded = nextProps.circlesToTransform.length > this.props.circlesToTransform.length;
    if(hasCirclesDeleted || hasCirclesAdded) {return false;} 
    return true;
  }

  componentWillUpdate(nextProps){
    const circleNumber = `circle${this.props.number}`
    if(nextProps[circleNumber].receivedColors){
      const currentCicrlceToTransform = nextProps.circlesToTransform[1]
      if(currentCicrlceToTransform){this.props.getColors(currentCicrlceToTransform)}
      this.props.deleteCircleToTransform()
    }
  }

  render(){
    const {top,right,height,width} = this.props.coord;
    const circleNumber = `circle${this.props.number}`;
    const [color1, color2, color3, color4, color5, color6, color7, color8 ] = this.props[circleNumber].colors;

    const beachBallStyle = { 
      backgroundImage:`linear-gradient(45deg, ${color1} 50%, ${color2} 50%),linear-gradient(135deg, ${color3} 50%, ${color4} 50%),linear-gradient(135deg, ${color5} 50%, ${color6} 50%),linear-gradient(225deg, ${color7} 50%, ${color8} 50%)`,
      backgroundSize:'50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0% 0%, 0% 100%, 100% 0%, 100% 100%',
      borderStyle:'none',
    }

    const circleStyle = {
    base: { position: 'absolute',
            borderRadius:'100%',
            backgroundColor:'#dddddd',
            borderColor:'#b2abab',
            borderStyle:'solid',
            borderWidth:'2px',
            display:'table',
            cursor:'pointer',
            width,
            height,
            top,
            right
    },
    beachBall: this.props[circleNumber].receivedColors ? beachBallStyle : {}
  }
    return (
      <div onClick={this.props.handleClick} style={[circleStyle.base,circleStyle.beachBall]}>
        <Spinner number={this.props.number}/>
      </div>
    ) 
  } 
}

function mapStateToProps(state,ownProps){
  const circleNumber = `circle${ownProps.number}`
  return {
    [circleNumber]:state[circleNumber],
    circlesToTransform:state.circlesToTransform
  }
}
