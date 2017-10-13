import React, { PropTypes } from 'react'
import '../styles/Tag.css'

const Tag = ({name, selected, clickable, toggleTag}) => {
    const selectedClass = `${selected ? 'teal accent-2' : ''}`
    return clickable ? (
        <div className={`Tag chip clickable ${selectedClass}`} onClick={toggleTag} >
            {name}
        </div>
    ) : (
        <div className={`Tag chip ${selectedClass}`}>
            {name}
        </div>
    )
}

Tag.PropTypes = {
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    clickable: PropTypes.bool.isRequired,
    toggleTag: PropTypes.func
}

export default Tag
