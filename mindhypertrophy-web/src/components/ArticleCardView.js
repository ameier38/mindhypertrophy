import React, { PropTypes } from 'react'
import ArticleCard from './ArticleCard'
import Banner from './Banner'
import LoadingArticleCard from './LoadingArticleCard'
import background from '../images/neurons.jpg'
import logo from '../images/mindhypertrophy.png'

const ArticleCardView = ({ isFetching, articles, selectArticle }) => (
    <div className="ArticleCardView">
        <Banner 
            imageUrl={background}
            logo={logo}
            title="Mind Hypertrophy"
            description="Train your brain!" />
        <div className="container">
            <div className="row">
                { isFetching && ['1','2'].map( id =>
                    <LoadingArticleCard key={id} />
                )}
                { !isFetching && articles.length > 0 && articles.map(article => 
                    <ArticleCard 
                        key={article.id}
                        article={article} 
                        selectArticle={() => selectArticle(article)} />
                )}
            </div>
        </div>
    </div>
)
ArticleCardView.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
    selectArticle: PropTypes.func.isRequired,
}

export default ArticleCardView