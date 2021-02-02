
// utilizing api apisauce that has built in axios feature 
import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export default  apiClient;
