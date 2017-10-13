import { SELECT_ARTICLE, REQUEST_ARTICLE, RECEIVE_ARTICLE } from '../actions'

const defaultSelectedArticle = {
    isFetching: true,
    requestedAt: null,
    receivedAt: null,
    selectedArticle: {
        id: "",
        slug: "",
        createdDate: "",
        imageUrl: "",
        title: "",
        summary: "",
        tags: [],
        markdown: ""
    }
}

const articleReducer = (state, action) => {
    switch (action.type) {
        case SELECT_ARTICLE:
        case RECEIVE_ARTICLE:
            return {
                ...state,
                ...action.selectedArticle
            }
        default:
            return state
    }
}

/**
 * Reducer that returns the new state of 'selectedArticle'
 * @property {string} state - currently selected Article
 * @property {object} action - action object
 */
const selectedArticle = (state = defaultSelectedArticle, action) => {
    switch (action.type) {
        case SELECT_ARTICLE:
            return {
                ...state,
                selectedArticle: articleReducer(state.selectedArticle, action)
            }
        case REQUEST_ARTICLE:
            return {
                ...state,
                isFetching: true,
                requestedAt: action.requestedAt
            }
        case RECEIVE_ARTICLE:
            return {
                ...state,
                isFetching: false,
                receivedAt: action.receivedAt,
                selectedArticle: articleReducer(state.selectedArticle, action)
            }
        default:
            return state
    }
}

export default selectedArticle