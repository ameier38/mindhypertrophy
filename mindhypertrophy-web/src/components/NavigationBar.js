import React, { PropTypes } from 'react'
import NavigationIcon from './NavigationIcon'

const NavigationBar = ({ onFindClick, pushArticle, toggleTag, clearTags }) => (
    <div className="icon-container">
        <NavigationIcon 
            iconName="home" 
            label="Home" 
            onClick={() => clearTags()} />
        <NavigationIcon 
            iconName="find_in_page" 
            label="Find" 
            onClick={onFindClick} />
        <NavigationIcon 
            iconName="info" 
            label="About" 
            onClick={() => pushArticle("about")} />
        <NavigationIcon 
            iconName="message" 
            label="Contact" 
            onClick={() => pushArticle("contact")} />
    </div>
)

NavigationBar.propTypes = {
    onFindClick: PropTypes.func.isRequired,
    pushArticle: PropTypes.func.isRequired,
    clearTags: PropTypes.func.isRequired
}

export default NavigationBar