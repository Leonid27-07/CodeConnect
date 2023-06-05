import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/tg" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <Link to="/gitea" className="navigation-links-navlink2">
        {props.text2}
      </Link>
      <a
        href="http://gitea.leonid-keenetic27.keenetic.pro"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text3}
      </a>
      <Link to="/mentor" className="navigation-links-navlink3">
        {props.text31}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text: 'Дом',
  text31: 'Наставники',
  text2: 'О gitea',
  text1: 'Телеграм чаты',
  text3: 'Gitea',
  text4: 'Blog',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text31: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks
