import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Radium from 'radium';
import axios from 'axios';
import _ from 'lodash'

@connect(mapStateToProps, actions)
@Radium
export default class Circle extends Component {

  constructor(){
    super()
    this.state={
      receivedColors:false,
      colors:[],
      spinner:false
    }

    this.handleOnClick = this.handleOnClick.bind(this)

  }

  handleOnClick(){
    this.setState({spinner:true, receivedColors:false})
    console.log('1.spinner true pas de balls')
    axios.get('/getColors').then((resp)=>{
      const colors = resp.data.map((color)=>{
        return color.toString()
      })
      this.setState({receivedColors:false},()=>{
        this.setState({receivedColors:true,spinner:false, colors})})
      console.log('2.spinner false and do balls')

    })     
  }
  
  spinner(){
    const spinnerStyle = {
      display:'table-cell', 
      verticalAlign:'middle', 
      textAlign:'center'
    }
    const isColored = this.state.spinner
    return isColored ? <span style={spinnerStyle} className="fa fa-spinner fa-spin"/> : ''
  }

  render(){
    let {top,right,height,width} = this.props.coord

    let [color1, color2, color3, color4, color5, color6, color7, color8 ] = this.state.colors

    let BeachBallStyle = { 
      background:`linear-gradient(45deg, ${color1} 50%, ${color2} 50%),linear-gradient(135deg, ${color3} 50%, ${color4} 50%),linear-gradient(135deg, ${color5} 50%, ${color6} 50%),linear-gradient(225deg, ${color7} 50%, ${color8} 50%)`,
      backgroundSize:'50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0% 0%, 0% 100%, 100% 0%, 100% 100%',
      borderStyle:'none'
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
    selected: this.state.receivedColors ? BeachBallStyle : {}
  }
    return (
      <div onClick={this.handleOnClick} style={[circleStyle.base,circleStyle.selected]}>
        {this.spinner()}
      </div>
    ) 
  } 
}

function mapStateToProps(state){
  return {
    colors:state.colors
  }
}
