import axios from 'axios';

export const GET_COLORS = 'GET_COLORS'


export const getColors = () => {
  
  const request = axios.get('/getColors')

  return {
    type:GET_COLORS,
    payload:request
  }
}