import React, { PropTypes } from 'react'
import NavigationBar from './NavigationBar'
import '../styles/BottomNavigation.css'

const BottomNavigation = (props) => (
    <div className="BottomNavigation hide-on-large-only z-depth-2">
        <NavigationBar {...props} />
    </div>
)

BottomNavigation.propTypes = {
    onFindClick: PropTypes.func.isRequired,
    pushArticle: PropTypes.func.isRequired,
    clearTags: PropTypes.func.isRequired
}

export default BottomNavigation
