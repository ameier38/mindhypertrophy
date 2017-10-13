import React, { PropTypes } from 'react'
import '../styles/Banner.css'

const Banner = ({ imageUrl, logo, title, description }) => {
    const backgroundStyle = {backgroundImage: `url(${imageUrl})`}
    return (
        <div className="Banner z-depth-1" style={backgroundStyle}>
            <div className="container flex-container">
                <div className="flex-item">
                    {logo && <img src={logo} role="presentation" /> }
                </div>
                <div className="flex-item">
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                </div>
            </div>
        </div>
    )
}

Banner.propTypes = {
    imageUrl: PropTypes.string,
    logo: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Banner