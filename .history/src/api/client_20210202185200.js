
// utilizing api apisauce that has built in axios plus error handling
import {create} from 'apisauce';
 
// define baseA
const apiClient = create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export default  apiClient;
