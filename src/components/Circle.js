import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const Circle = (props) => {

  let {top,right,height,width} = props.coord

  const circleStyle = {
    base: { position: 'absolute',
            borderRadius:'100%',
            backgroundColor:'#dddddd',
            borderColor:'#b2abab',
            borderStyle:'solid',
            borderWidth:'2px',
            width,
            height,
            top,
            right
    }
  }

  return (
    <div style={circleStyle.base}></div>
  )  
}

function mapStateToProps(state){
  return {
    stateless:state.state1
  }
}

export default connect(mapStateToProps,actions)(Circle)
