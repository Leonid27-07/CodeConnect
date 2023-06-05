import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './mentor.css'

const Mentor = (props) => {
  return (
    <div className="mentor-container">
      <Helmet>
        <title>Mentor - codeconnect</title>
        <meta property="og:title" content="Mentor - codeconnect" />
      </Helmet>
      <Header></Header>
      <div className="mentor-testimonial">
        <div className="mentor-container1">
          <h1 className="mentor-text">Наставники</h1>
          <span className="mentor-text01">
            <span>
              Наши опытные наставники помогут с создание и развитием проекта, а
              также поделятся своими знаниями и опытом в интересующей вас
              области. Вместе мы сможем разработать стратегию успеха и достичь
              поставленных целей.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Мы предлагаем персональный подход к каждому ученику, учитывая его
              уникальные потребности и желания. Наши наставники готовы работать
              как в одностороннем, так и в двухстороннем формате, чтобы
              обеспечить наилучшее развитие проекта.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              С нами вы можете рассчитывать на постоянную поддержку и помощь в
              решении любых вопросов, связанных с вашим проектом. Мы готовы
              стать вашим надежным партнером на пути к успеху!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="mentor-container2">
            <div className="mentor-testimonial-card">
              <svg viewBox="0 0 950.8571428571428 1024" className="mentor-icon">
                <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
              </svg>
              <div className="mentor-testimonial1">
                <span className="mentor-text09">
                  Разработка backend, помощь с физическим созданием проекта.
                </span>
                <span className="mentor-text10">Леонид Перкин</span>
                <span className="mentor-text11">SOFTWARE ENGINEER</span>
                <a
                  href="https://t.me/leonidperkin27"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mentor-link"
                >
                  <img
                    alt="profile"
                    src="/external/leo-ico-200h.jpg"
                    className="mentor-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Mentor
