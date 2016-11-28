import React, { Component, PropTypes } from 'react';
import { connect }          from 'react-redux';

@connect(mapStateToProps)
export default class Spinner extends Component {

  static propTypes = {
    number: PropTypes.number.isRequired,
  }

  render(){
    const circleNumber = `circle${this.props.number}`;
    const spinnerStyle = {
      display:'table-cell', 
      verticalAlign:'middle', 
      textAlign:'center'
    };
    const isColored = this.props[circleNumber].spinner;
    if(isColored === 'error'){
      return (<div> Network error, please try again...</div>)
    } else if (isColored){
      return (<span style={spinnerStyle} className="fa fa-spinner fa-spin"/>)
    } else {
      return null
    }
  }

}

function mapStateToProps(state,ownProps){
  const circleNumber = `circle${ownProps.number}`
  return {
    [circleNumber]:state[circleNumber],
  }
}

   