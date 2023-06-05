import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-feature-card">
      <h2 className="feature-card-text">{props.heading}</h2>
      <img
        alt="image"
        src="/external/frontend-ico-200h.png"
        className="feature-card-image"
      />
    </div>
  )
}

FeatureCard.defaultProps = {
  image_alt: 'image',
  image_src: '0a7f1bd9-706f-4b00-b665-c0c71d615722',
  heading: 'fronend разработка',
}

FeatureCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default FeatureCard
