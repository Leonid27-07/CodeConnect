import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card1.css'

const TestimonialCard1 = (props) => {
  return (
    <div
      className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
    >
      <svg
        viewBox="0 0 950.8571428571428 1024"
        className="testimonial-card1-icon"
      >
        <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
      </svg>
      <div className="testimonial-card1-testimonial">
        <span className="testimonial-card1-text">
          Разработка backend, помощь с физическим созданием проекта.
        </span>
        <span className="testimonial-card1-text1">{props.text}</span>
        <span className="testimonial-card1-text2">SOFTWARE ENGINEER</span>
        <img
          alt="profile"
          src="/external/leo-ico-200h.jpg"
          className="testimonial-card1-image"
        />
      </div>
    </div>
  )
}

TestimonialCard1.defaultProps = {
  text1: 'Разработка backend, помощь с физическим созданием проекта.',
  rootClassName: '',
  text: 'Леонид Перкин',
}

TestimonialCard1.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default TestimonialCard1
