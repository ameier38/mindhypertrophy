import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { toggleTag, clearTags } from '../actions'
import { push } from 'react-router-redux'

const mapDispatchToProps = (dispatch) => ({
    toggleTag: tag => dispatch(toggleTag(tag)),
    clearTags: () => dispatch(clearTags()),
    pushArticle: slug => dispatch(push(`/${slug}`))
})

const mapStateToProps = (state) => ({
    tags: state.tags.tags
})

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)

export default NavigationContainer