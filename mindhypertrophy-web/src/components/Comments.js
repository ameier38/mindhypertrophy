import React, { PropTypes } from 'react'
import Paper from './Paper'
import DisqusComments from 'react-disqus-comments'

const Comments = ({ identifier, title }) => (
    <Paper>
        <DisqusComments
            shortname="mindhypertrophy"
            identifier={identifier}
            title={title}
            url="http://mindhypertrophy.com" />
    </Paper>
)

Comments.propTypes = {
    identifier: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Comments
