import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class CommentBox extends Component {

  constructor(props){
    super(props);
      this.state = {
        comment: ''
      }; 
    
  }

  HandleChange(event){
    this.setState({
      comment: event.target.value
    })
  }

  render(){
    return (
      <div className='comment-box'>
        <textarea 
        value={this.state.comment} 
        onChange={this.HandleChange.bind(this)}/>
        <button onClick={this.props.test}> Submit</button>
        <p>{this.props.stateless}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    stateless:state.state1
  }
}

export default connect(mapStateToProps,actions)(CommentBox)
