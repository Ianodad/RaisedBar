// import base url plus api sauce features
import client from './client'

// define endpoint for different 
const endPointDetail = '/lookup.php?i='
const endPointRandom = '/random.php'
const endPointCategory = '/filter.php?c='
const endPointSearch = '/search.php?s='
const endPointCategories =  'list.php?c=list'

const getCocktailDetail = (id)=> client.get(endPointDetail+id)

const getRandomDrink = ()=> client.get(endPointRandom)

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