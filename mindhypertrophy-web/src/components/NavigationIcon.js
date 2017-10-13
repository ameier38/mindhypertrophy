import React, { PropTypes } from 'react'
import Icon from './Icon'
import '../styles/NavigationIcon.css'

const NavigationIcon = ({iconName, label, onClick}) => (
    <div className="NavigationIcon" onClick={onClick}>
        <div className="center-align">
            <Icon name={iconName} />
            <p className="label">{label}</p>
        </div>
    </div>
)

NavigationIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default NavigationIcon