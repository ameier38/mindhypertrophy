import React, { PropTypes } from 'react'
import TagBox from './TagBox'

const SearchModal = ({ tags, toggleTag, clearTags, target }) => {
        return (
            <div id={`${target}`} className="modal bottom-sheet">
                <div className="model-footer">
                    <a className="waves-effect btn teal" onClick={clearTags}>
                        <i className="material-icons right">delete_sweep</i>
                        Clear
                    </a>
                </div>
                <div className="modal-content">
                    <TagBox 
                        tags={tags} 
                        clickable={true} 
                        toggleTag={toggleTag} />
                </div>
            </div>
        )
}

SearchModal.propTypes = {
    target: PropTypes.string.isRequired,
    toggleTag: PropTypes.func.isRequired,
    clearTags: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired
}

export default SearchModal