import axios from 'axios';
export const api = axios.create({baseURL: 'http://localhost:3001/'});
const requestFindAll= async ( ) =>{
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error: any) {
    console.log(error)
    return error.response;
  }
}
export default requestFindAll;