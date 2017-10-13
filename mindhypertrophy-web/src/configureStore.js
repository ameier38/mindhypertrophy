import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

let middleware = [thunkMiddleware, routerMiddleware(browserHistory)]
if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger()]
}

const configureStore = (preloadedState) => {
    return createStore(
        rootReducer, 
        preloadedState,
        applyMiddleware(
            ...middleware
        )
    )
}

export default configureStore