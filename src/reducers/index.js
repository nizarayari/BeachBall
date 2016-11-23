import { combineReducers } from 'redux';
import reducer_test from './reducer_test';

const rootReducer = combineReducers({
  state1: reducer_test
});

export default rootReducer;
