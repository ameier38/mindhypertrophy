import React, { Component, PropTypes } from 'react'
import ArticleView from '../components/ArticleView'
import { connect } from 'react-redux'
import { toggleTag, requestArticle, fetchArticle } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    routeSlug: ownProps.params.slug,
    isFetching: state.selectedArticle.isFetching,
    selectedArticle: state.selectedArticle.selectedArticle
})

const mapDispatchToProps = (dispatch) => ({
    toggleTag: tagName => dispatch(toggleTag(tagName)),
    requestArticle: slug => dispatch(requestArticle(slug)),
    fetchArticle: slug => dispatch(fetchArticle(slug))
})

class ArticleViewContainer extends Component {
    componentDidMount() {
        const { 
            requestArticle, fetchArticle, 
            routeSlug 
        } = this.props
        requestArticle(routeSlug)
        fetchArticle(routeSlug)
    }
    componentWillReceiveProps(nextProps) {
        const { routeSlug } = nextProps
        const { 
            requestArticle, fetchArticle,
            selectedArticle
        } = this.props
        if (selectedArticle.slug !== routeSlug) {
            requestArticle(routeSlug)
            fetchArticle(routeSlug)
        }
    }
    render() {
        const { isFetching, toggleTag, selectedArticle } = this.props
        return ( 
            <ArticleView 
                isFetching={isFetching}
                article={selectedArticle}
                toggleTag={toggleTag} />

        )
    }
}

ArticleViewContainer.propTypes = {
    routeSlug: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    selectedArticle: PropTypes.object.isRequired,
    toggleTag: PropTypes.func.isRequired,
    requestArticle: PropTypes.func.isRequired,
    fetchArticle: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleViewContainer)