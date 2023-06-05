import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard1 from '../components/feature-card1'
import FeatureCard from '../components/feature-card'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './tg.css'

const Tg = (props) => {
  return (
    <div className="tg-container">
      <Helmet>
        <title>tg - codeconnect</title>
        <meta property="og:title" content="tg - codeconnect" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="tg-features">
        <h1 className="tg-text">Наши телеграм чаты</h1>
        <div className="tg-container1">
          <a
            href="https://t.me/+UmBQJACJOwA0Mzhi"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FeatureCard1
              rootClassName="rootClassName"
              className="tg-component1"
            ></FeatureCard1>
          </a>
          <a
            href="https://t.me/+hdH-SwsAUtZmOTNi"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FeatureCard className="tg-component2"></FeatureCard>
          </a>
          <a
            href="https://t.me/+EHuHLPDUDSdiMjAy"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FeatureCard2 className="tg-component3"></FeatureCard2>
          </a>
        </div>
      </div>
      <div className="tg-banner">
        <h1 className="tg-text1">Телеграм канал</h1>
        <span className="tg-text2">
          В данном телеграм канале публикуются новости проекта
        </span>
        <a
          href="https://t.me/+R4RhJKRuT543MTUy"
          target="_blank"
          rel="noreferrer noopener"
          className="tg-link3 button"
        >
          Перейти
        </a>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Tg
