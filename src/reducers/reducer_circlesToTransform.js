import { ADD_CIRCLE, DELETE_CIRCLE } from '../actions/types';

const INITIAL_STATE = [];

export default function(state=INITIAL_STATE, action){
  
  switch(action.type){
    case ADD_CIRCLE:
      return [...state,action.payload]
    case DELETE_CIRCLE:
      let newState = [...state];
      newState.shift();
      return newState;
    default:
      return state;
  }
}