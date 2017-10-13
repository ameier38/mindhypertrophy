import React, { PropTypes } from 'react'
import dateFormat from 'dateformat'
import Article from './Article'
import LoadingArticle from './LoadingArticle'
import Comments from './Comments'
import Banner from './Banner'

const ArticleView = ({ isFetching, article, toggleTag }) => (
    <div className="ArticleView">
        <Banner 
            imageUrl={article.imageUrl}
            title={article.title}
            description={dateFormat(article.createdDate, 'fullDate')} />
        <div className="container">
            {(isFetching || !article.slug) && <LoadingArticle />}
            {(!isFetching && article.slug) && <Article markdown={article.markdown} />}
            <Comments identifier={article.slug} title={article.title} />
        </div>
    </div>
)

ArticleView.propTypes = {
    article: PropTypes.object.isRequired,
    toggleTag: PropTypes.func.isRequired
}

export default ArticleView