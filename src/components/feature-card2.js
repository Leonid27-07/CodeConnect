import React from 'react'

import PropTypes from 'prop-types'

import './feature-card2.css'

const FeatureCard2 = (props) => {
  return (
    <div className="feature-card2-feature-card">
      <h2 className="feature-card2-text">{props.heading}</h2>
      <img
        alt={props.image_alt}
        src="/external/chat-200h.png"
        className="feature-card2-image"
      />
    </div>
  )
}

FeatureCard2.defaultProps = {
  image_alt: 'image',
  image_src: '057a6421-7f60-46ba-ac56-bdc390bf1a81',
  heading: 'Общение',
}

FeatureCard2.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default FeatureCard2
