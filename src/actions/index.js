import axios                       from 'axios';
import {ADD_CIRCLE, DELETE_CIRCLE} from './types'; 

export const getColors = (i) => {
  const GET_COLORS_CIRCLE = 'GET_COLORS_CIRCLE';
  const GET_SPINNER_CIRCLE = 'GET_SPINNER_CIRCLE';

  return (dispatch) => {
    dispatch({
      type:`${GET_SPINNER_CIRCLE}${i}`,
    })
    axios.get('/getColors').then((resp)=>{
      //To reset design in case of multiple click
      dispatch({
      type:`${GET_SPINNER_CIRCLE}${i}`,
      })
      dispatch({
        type:`${GET_COLORS_CIRCLE}${i}`,
        payload:resp.data
      })
    })
  }
}


export const addCircleToTransform = (circle) => {
  return {
    type: ADD_CIRCLE,
    payload: circle
  }
}

export const deleteCircleToTransform = (circle) => {
  return {
    type: DELETE_CIRCLE,
    payload: circle
  }
}