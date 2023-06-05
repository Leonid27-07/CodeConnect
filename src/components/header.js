import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/" className="header-navlink">
        <img
          alt={props.image_alt}
          src="/external/codeconnect-1500h.png"
          className="header-image"
        />
      </Link>
      <div className="header-nav">
        <NavigationLinks
          rootClassName="rootClassName17"
          className=""
        ></NavigationLinks>
      </div>
      <div data-role="BurgerMenu" className="header-burger-menu">
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-nav1">
          <div className="header-container">
            <img
              alt="image"
              src="/external/codeconnect-1500h.png"
              className="header-image1"
            />
            <div
              data-role="CloseMobileMenu"
              className="header-close-mobile-menu"
            >
              <svg viewBox="0 0 1024 1024" className="header-icon2">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <NavigationLinks
            rootClassName="rootClassName18"
            className=""
          ></NavigationLinks>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  image_alt1: 'image',
  image_alt: 'logo',
  rootClassName: '',
  image_src1:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Header.propTypes = {
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
