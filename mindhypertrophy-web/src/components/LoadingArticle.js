import React from 'react'
import Paper from './Paper'
import '../styles/LoadingArticle.css'

const LoadingArticle = () => (
    <Paper>
        <div className="LoadingArticle">
            <span className="title" />
            <span className="content" />
            <span className="content" />
        </div>
    </Paper>
)

export default LoadingArticle