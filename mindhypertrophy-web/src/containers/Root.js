import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../configureStore'
import App from '../components/App'
import ArticleCardViewContainer from '../containers/ArticleCardViewContainer'
import ArticleViewContainer from '../containers/ArticleViewContainer'
import NotFound from '../components/NotFound'
import { fetchAllArticles, fetchAllTags } from '../actions'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(fetchAllArticles())
store.dispatch(fetchAllTags())

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={App}>
                <IndexRoute component={ArticleCardViewContainer} />
                <Route path=":slug" component={ArticleViewContainer} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>
    </Provider>
)

export default Root