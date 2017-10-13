/**
 * All available actions.
 */
import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'

const host = process.env.REACT_APP_API_HOST || "localhost"
const port = process.env.REACT_APP_API_PORT || 5000
const api_url = `http://${host}/api`

export const TOGGLE_TAG = 'TOGGLE_TAG'
export const CLEAR_TAGS = 'CLEAR_TAGS'
export const SELECT_ARTICLE = 'SELECT_ARTICLE'
export const REQUEST_ALL_TAGS = 'REQUEST_ALL_TAGS'
export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS'
export const REQUEST_ALL_ARTICLES = 'REQUEST_ALL_ARTICLES'
export const RECEIVE_ALL_ARTICLES = 'RECEIVE_ALL_ARTICLES'
export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'

/**
 * Private. Tag to add or remove 
 * from the selectedTags array
 * @param {string} tagName - tag name
 */
const _toggleTag = (tagName) => ({
    type: TOGGLE_TAG, 
    tagName
})

const _clearTags = () => ({
    type: CLEAR_TAGS
})

/**
 * Dispatches _toggleTag action then dispatches
 * push action to redirect to home route
 * @param {string} tagName
 * @return {thunk}
 */
export const toggleTag = (tagName) => {
    return dispatch => {
        dispatch(_toggleTag(tagName))
        dispatch(push('/'))
    }
}

export const clearTags = () => {
    return dispatch => {
        dispatch(_clearTags())
        dispatch(push('/'))
    }
}

/**
 * Private. Article for which
 * to set selectedArticle state
 * @param {object} selectedArticle 
 */
const _selectArticle = (selectedArticle) => ({
    type: SELECT_ARTICLE,
    selectedArticle
})

/**
 * Dispatches _selectArticle then dispatches
 * push action to redirect to article route
 * @param {object} selectedArticle 
 */
export const selectArticle = (selectedArticle) => {
    return dispatch => {
        dispatch(_selectArticle(selectedArticle))
        dispatch(push(`/${selectedArticle.slug}`))
    }
}

export const requestAllTags = () => ({
    type: REQUEST_ALL_TAGS,
    requestedAt: Date.now()
})

export const receiveAllTags = (tags) => ({
    type: RECEIVE_ALL_TAGS,
    receivedAt: Date.now(),
    tags: tags.map(tag => ({
        name: tag.name
    }))
})

export const requestAllArticles = () => ({
    type: REQUEST_ALL_ARTICLES,
    requestedAt: Date.now()
})

export const receiveAllArticles = (articles) => {
    return({
        type: RECEIVE_ALL_ARTICLES,
        receivedAt: Date.now(),
        articles: articles.map(
            article => ({
                id: article.id,
                slug: article.slug,
                title: article.title,
                imageUrl: article.imageUrl,
                summary: article.summary,
                createdDate: article.createdDate,
                tags: article.tags.map(tag => ({
                    name: tag.name
                }))
            })
        )
    })
}

export const requestArticle = (slug) => ({
    type: REQUEST_ARTICLE,
    slug,
    requestedAt: Date.now()
})

export const receiveArticle = (selectedArticle) => ({
    type: RECEIVE_ARTICLE,
    receivedAt: Date.now(),
    selectedArticle
})

export const fetchAllArticles = () => {
    return dispatch => {
        dispatch(requestAllArticles())
        return fetch(`${api_url}/articles`)
            .then(response => response.json())
            .then(articles => dispatch(receiveAllArticles(articles)))
            .catch(e => console.log(e))
    }
}

export const fetchArticle = (slug) => {
    return dispatch => {
        dispatch(requestArticle(slug))
        return fetch(`${api_url}/articles/slug/${slug}`)
            .then(response => response.json())
            .then(selectedArticle => dispatch(receiveArticle(selectedArticle)))
            .catch(e => console.log(e))
    }
}

export const fetchAllTags = () => {
    return dispatch => {
        dispatch(requestAllTags())
        return fetch(`${api_url}/tags`)
            .then(response => response.json())
            .then(tags => dispatch(receiveAllTags(tags)))
            .catch(e => console.log(e))
    }
}