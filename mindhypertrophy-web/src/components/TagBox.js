import React, { PropTypes } from 'react'
import Tag from './Tag'

const TagBox = ({ clickable, tags, toggleTag}) => (
    <div className="TagBox">
        { clickable && tags.map((tag, idx) =>
            <Tag 
                key={idx} 
                name={tag.name}
                selected={tag.selected}
                clickable={clickable}
                toggleTag={() => toggleTag(tag.name)} /> 
        )}
        { !clickable && tags.map((tag, idx) =>
            <Tag 
                key={idx} 
                name={tag.name}
                selected={tag.selected}
                clickable={clickable} /> 
        )}
    </div>
)

TagBox.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        selected: PropTypes.bool
    })),
    clickable: PropTypes.bool.isRequired,
    toggleTag: PropTypes.func
}

export default TagBox