import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import Radium                          from 'radium';

@connect(mapStateToProps)
@Radium
export default class Circle extends Component {
  
  static propTypes = {
    number: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    coord:PropTypes.object.isRequired,
    circle1:PropTypes.object.isRequired,
    circle2:PropTypes.object.isRequired,
    circle3:PropTypes.object.isRequired,
    circle4:PropTypes.object.isRequired,
    circle5:PropTypes.object.isRequired
  }

  renderSpinner(){
    let circleNumber = `circle${this.props.number}`
    const spinnerStyle = {
      display:'table-cell', 
      verticalAlign:'middle', 
      textAlign:'center'
    }
    const isColored = this.props[circleNumber].spinner
    return isColored ? <span style={spinnerStyle} className="fa fa-spinner fa-spin"/> : ''
  }

  render(){
    let {top,right,height,width} = this.props.coord
    let circleNumber = `circle${this.props.number}`
    let [color1, color2, color3, color4, color5, color6, color7, color8 ] = this.props[circleNumber].colors

    let beachBallStyle = { 
      background:`linear-gradient(45deg, ${color1} 50%, ${color2} 50%),linear-gradient(135deg, ${color3} 50%, ${color4} 50%),linear-gradient(135deg, ${color5} 50%, ${color6} 50%),linear-gradient(225deg, ${color7} 50%, ${color8} 50%)`,
      backgroundSize:'50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0% 0%, 0% 100%, 100% 0%, 100% 100%',
      borderStyle:'none',
    }

    const circleStyle = {
    base: { position: 'absolute',
            borderRadius:'100%',
            background:'#dddddd',
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
        {this.renderSpinner()}
      </div>
    ) 
  } 
}

function mapStateToProps(state){
  return {
    circle1:state.circle1,
    circle2:state.circle2,
    circle3:state.circle3,
    circle4:state.circle4,
    circle5:state.circle5
  }
}
