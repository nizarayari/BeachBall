import axios from 'axios';

export const getColors = (i) => {
  const GET_COLORS_CIRCLE = 'GET_COLORS_CIRCLE'
  const GET_SPINNER_CIRCLE = 'GET_SPINNER_CIRCLE'

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