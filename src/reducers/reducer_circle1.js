import {GET_COLORS_CIRCLE1}  from '../actions/types';
import {GET_SPINNER_CIRCLE1} from '../actions/types';

const INITIAL_STATE = {
  colors:[],
  receivedColors:false,
  spinner:false
}

export default function(state=INITIAL_STATE, action){
  
  switch(action.type){
    case GET_COLORS_CIRCLE1:
      let colors = action.payload.map((color)=>{
        return color.toString()
      })

      return {...state,colors, receivedColors:true,spinner:false}

    case GET_SPINNER_CIRCLE1:
      return {
        ...state,spinner:true,receivedColors:false
      }
    default:
      return state
  }
}