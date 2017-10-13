import React, { PropTypes } from 'react'
import Paper from './Paper'
import Markdown from './Markdown'

const Article = ({ markdown }) => (
    <Paper>
        <Markdown>
            {markdown}
        </Markdown>
    </Paper>
)

Article.propTypes = {
    markdown: PropTypes.string.isRequired
}

export default Article