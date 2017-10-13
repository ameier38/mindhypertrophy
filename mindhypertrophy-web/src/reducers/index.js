import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from './articles'
import selectedArticle from './selectedArticle'
import tags from './tags'


/**
 * The root reducer which combines all the
 * reducers for the application. `combineReducers`
 * will map the state property corresponding to the 
 * name of the reducer.
 */
const rootReducer = combineReducers({
    tags,
    articles,
    selectedArticle,
    routing: routerReducer
})

export default rootReducer