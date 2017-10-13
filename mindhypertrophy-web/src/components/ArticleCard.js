import React, { PropTypes } from 'react';
import dateFormat from 'dateformat'
import TagBox from './TagBox';
import '../styles/ArticleCard.css'

const ArticleCard = ({ article, selectArticle }) => (
    <div className="ArticleCard col s12 m6" onClick={selectArticle}>
        <div className="card small">
            <div className="card-content">
                <span className="card-title">{article.title}</span>
                <span className="card-subtitle">{dateFormat(article.createdDate, 'fullDate')}</span>
                <p>{article.summary}</p>
            </div>
            <div className="card-action">
                <TagBox tags={article.tags} clickable={false} />
            </div>
        </div>
    </div>
)

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
    selectArticle: PropTypes.func.isRequired
}

export default ArticleCard
