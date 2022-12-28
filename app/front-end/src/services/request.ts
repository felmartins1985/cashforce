import axios from 'axios';

const requestFindAll= async ( ) =>{
  try {
    const URL = 'http://localhost:3001/';
    const response = await axios.get(URL);
    return response.data;
  } catch (error: any) {
    console.log(error)
    return error.response;
  }
}
export default requestFindAll;