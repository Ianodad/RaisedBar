
// utilizing api ssauce 
import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export default  apiClient;
