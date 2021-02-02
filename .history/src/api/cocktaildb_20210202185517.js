// import base url plus api sauce features
import client from './client'

// define endpoint for different data sources
const endPointDetail = '/lookup.php?i='
const endPointRandom = '/random.php'
const endPointCategory = '/filter.php?c='
const endPointSearch = '/search.php?s='
const endPointCategories =  'list.php?c=list'

// fetches one item base on id 
const getCocktailDetail = (id)=> client.get(endPointDetail+id)


// fetches one random drink
const getRandomDrink = ()=> client.get(endPointRandom)

// gets all items based on category 
const getByCategory = (category)=> client.get(endPointCategory+category)

const searchByName = (name)=> client.get(endPointSearch+name)

const getCategoryList = () => client.get(endPointCategories)


export default {
    getCocktailDetail,
    getRandomDrink,
    getByCategory,
    searchByName,
    getCategoryList
}