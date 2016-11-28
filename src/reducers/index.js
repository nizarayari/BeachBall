import reducer_circle1            from './reducer_circle1';
import reducer_circle2            from './reducer_circle2';
import reducer_circle3            from './reducer_circle3';
import reducer_circle4            from './reducer_circle4';
import reducer_circle5            from './reducer_circle5';
import { combineReducers }        from 'redux';
import reducer_circlesToTransform from './reducer_circlesToTransform';

const rootReducer = combineReducers({
  circle1: reducer_circle1,
  circle2: reducer_circle2,
  circle3: reducer_circle3,
  circle4: reducer_circle4,
  circle5: reducer_circle5,
  circlesToTransform: reducer_circlesToTransform
});

export default rootReducer;
