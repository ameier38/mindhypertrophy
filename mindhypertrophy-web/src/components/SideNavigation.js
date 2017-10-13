import React, { PropTypes } from 'react'
import NavigationBar from './NavigationBar'
import '../styles/SideNavigation.css'

const SideNavigation = (props) => (
    <div className="SideNavigation hide-on-med-and-down">
        <NavigationBar {...props} />
    </div>
)

SideNavigation.propTypes = {
    onFindClick: PropTypes.func.isRequired,
    pushArticle: PropTypes.func.isRequired,
    clearTags: PropTypes.func.isRequired
}

export default SideNavigation