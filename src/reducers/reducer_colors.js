import {GET_COLORS} from '../actions'

const INITIAL_STATE = []

export default function(state=INITIAL_STATE, action){
  switch(action.type){
    case GET_COLORS:
      return action.payload.data.map((color)=>{
        return color.toString()
      })
    default:
      return state
  }
}