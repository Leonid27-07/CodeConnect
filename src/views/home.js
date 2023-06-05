import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>codeconnect</title>
        <meta property="og:title" content="codeconnect" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-container01">
        <span className="home-text Heading">
          <span>CodeConnect</span>
          <br></br>
        </span>
        <span className="home-text03">
          Платформа для объединения школьников увлечённых программированием
        </span>
      </div>
      <div className="home-banner">
        <h1 className="home-text04">Сообщесто</h1>
        <span className="home-text05">
          <span>
            Ученики школ - это тысячи людей.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Тысячи талантливых учеников, которые могут активно развивать свои
            проекты в сфере it.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            CodeConnect поможет ученикам в создании и развитии своих проектов.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <div className="home-gallery">
        <div className="home-container02">
          <div className="home-gallery-card">
            <img
              alt="image"
              src="/external/1-1400w.jpg"
              className="home-image"
            />
            <div className="home-container03"></div>
          </div>
          <div className="home-gallery-card1">
            <img
              alt="image"
              src="/external/2-1500w.jpg"
              className="home-image1"
            />
            <div className="home-container04"></div>
          </div>
          <div className="home-gallery-card2">
            <img
              alt="image"
              src="/external/3-1500h.jpg"
              className="home-image2"
            />
            <div className="home-container05"></div>
          </div>
          <div className="home-gallery-card3">
            <img
              alt="image"
              src="/external/4-1500h.jpg"
              className="home-image3"
            />
            <div className="home-container06"></div>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <span className="home-text11 Heading">
          <span>CodeConnect Сегодня</span>
          <br className="Heading"></br>
        </span>
        <h1 className="home-text14">
          Наши сервисы позволяют сотням школьников обмениваться знаниями и
          побеждать в конкурсах
        </h1>
        <div className="home-stats">
          <div className="home-stat">
            <span className="home-text15">Чаты</span>
            <span className="home-text16">По сферам</span>
            <h1 className="home-text17">4</h1>
          </div>
          <div className="home-stat1">
            <span className="home-text18">Проекты</span>
            <span className="home-text19">Реализованные проекты</span>
            <h1 className="home-text20">6</h1>
          </div>
          <div className="home-stat2">
            <span className="home-text21">Участники</span>
            <span className="home-text22">Школьники вовлечённые в проекты</span>
            <h1 className="home-text23">~30</h1>
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-card">
            <div className="home-container07">
              <div className="home-container08">
                <img
                  alt="image"
                  src="/external/op-200h.png"
                  className="home-image4"
                />
              </div>
            </div>
            <span className="home-text24">Помощь опытных наставников </span>
            <Link to="/mentor" className="home-navlink button">
              Подробнее
            </Link>
          </div>
          <div className="home-card1">
            <div className="home-container09">
              <div className="home-container10">
                <img
                  alt="image"
                  src="/external/gitea-200h.png"
                  className="home-image5"
                />
              </div>
            </div>
            <span className="home-text25">
              Выделенный сервер gitea для размещения своих проектов
            </span>
            <Link to="/gitea" className="home-navlink1 button">
              Подробнее
            </Link>
          </div>
          <div className="home-card2">
            <div className="home-container11">
              <div className="home-container12">
                <img
                  alt="image"
                  src="/external/tg-200h.png"
                  className="home-image6"
                />
              </div>
            </div>
            <span className="home-text26">
              Телеграм чаты посвящённые определённым сферам
            </span>
            <Link to="/tg" className="home-navlink2 button">
              Подробнее
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
