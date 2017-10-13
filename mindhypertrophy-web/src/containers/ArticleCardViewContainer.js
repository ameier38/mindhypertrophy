import { connect } from 'react-redux'
import ArticleCardView from '../components/ArticleCardView'
import { selectArticle } from '../actions'

const getVisibleArticles = (articles, selectedTags) => {
    const filteredArticles = articles.filter(article => {
        return !['contact', 'about'].includes(article.slug)
    })
    if (selectedTags.length === 0) {
        return filteredArticles.map(article => ({
            ...article,
            tags: article.tags.map(tag => ({
                ...tag,
                selected: false
            }))
        }))
    }
    else {
        const updatedArticles = filteredArticles.map(article => ({
            ...article,
            tags: article.tags.map(tag => ({
                ...tag,
                selected: selectedTags.some(
                    selectedTag => selectedTag.name === tag.name
                )
            }))
        }))
        return updatedArticles.filter(
            article => article.tags.some(
                articleTag => articleTag.selected
            )
        )
    }
}

const mapStateToProps = (state) => {
    const selectedTags = state.tags.tags.filter(tag => tag.selected)
    return ({
        isFetching: state.articles.isFetching,
        articles: getVisibleArticles(state.articles.articles, selectedTags),
    })
}

const mapDispatchToProps = (dispatch) => ({
    selectArticle: selectedArticle => dispatch(selectArticle(selectedArticle))
})

const ArticleCardViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleCardView)

export default ArticleCardViewContainer