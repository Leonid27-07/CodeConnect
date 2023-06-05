import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <Link to="/" className="footer-navlink">
          <img
            alt={props.image_alt}
            src="/external/codeconnect-1500h.png"
            className="footer-image"
          />
        </Link>
      </div>
      <div className="footer-separator"></div>
      <div className="footer-container1">
        <span className="footer-text">{props.text}</span>
        <div className="footer-icon-group">
          <a
            href="https://t.me/+R4RhJKRuT543MTUy"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <svg viewBox="0 0 1024 1024" className="footer-icon">
              <path
                d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"
                className=""
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text: '© 2023 Leonid Perkin, All Rights Reserved.',
  text4: 'Team',
  text2: 'Features',
  text5: 'Blog',
  rootClassName: '',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text1: 'About',
  image_alt: 'logo',
  text3: 'Pricing',
}

Footer.propTypes = {
  text: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text3: PropTypes.string,
}

export default Footer
