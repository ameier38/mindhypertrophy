import { 
    TOGGLE_TAG, CLEAR_TAGS, REQUEST_ALL_TAGS, 
    RECEIVE_ALL_TAGS 
} from '../actions'

const default_state = {
    isFetching: false,
    requestedAt: null,
    receivedAt: null,
    tags: []
}

const selectedTagsReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_TAG:
            return state.map(tag => {
                if (tag.name === action.tagName) {
                    return {...tag, selected: !tag.selected}
                }
                else {
                    return tag
                }
            })
        case CLEAR_TAGS:
        case RECEIVE_ALL_TAGS:
            return state.map(tag => ({
                ...tag,
                selected: false
            }))
        default:
            return state
    }
}

const tags = (state = default_state, action) => {
    switch (action.type) {
        case TOGGLE_TAG:
            return {
                ...state,
                tags: selectedTagsReducer(state.tags, action)
            }
        case CLEAR_TAGS:
            return {
                ...state,
                tags: selectedTagsReducer(state.tags, action)
            }
        case REQUEST_ALL_TAGS:
            return {
                ...state, 
                isFetching: true,
                requestedAt: action.requestedAt
            }
        case RECEIVE_ALL_TAGS:
            return {
                ...state, 
                isFetching: false, 
                receivedAt: action.receivedAt,
                tags: selectedTagsReducer(action.tags, action)
            }
        default:
            return state
    }
}

export default tags