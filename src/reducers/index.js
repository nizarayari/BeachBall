import { combineReducers } from 'redux';
import reducer_colors from './reducer_colors';

const rootReducer = combineReducers({
  colors: reducer_colors
});

export default rootReducer;
