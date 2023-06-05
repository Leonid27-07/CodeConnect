import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './gitea.css'

const Gitea = (props) => {
  return (
    <div className="gitea-container">
      <Helmet>
        <title>gitea - codeconnect</title>
        <meta property="og:title" content="gitea - codeconnect" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="gitea-hero">
        <img src="/external/gitea-logo-1500w.png" className="gitea-image" />
        <div className="gitea-container1">
          <h1 className="gitea-text">Gitea</h1>
          <h2 className="gitea-text01">Gitea - Git with a cup of tea</h2>
          <div className="gitea-btn-group">
            <a
              href="http://gitea.leonid-keenetic27.keenetic.pro"
              target="_blank"
              rel="noreferrer noopener"
              className="gitea-link button"
            >
              Начать
            </a>
            <a
              href="https://docs.gitea.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="gitea-link1 button"
            >
              Подробнее
            </a>
          </div>
          <span className="gitea-text02">
            Gitea - это открытая система контроля версий, которая обеспечивает
            удобный и эффективный процесс управления и совместной работы над
            проектами. Она рассчитана на использование небольшими командами
            разработчиков, но также может быть полезна индивидуальным
            разработчикам, которые работают над собственными проектами.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="gitea-text03">
            <span>
              Gitea была создана в 2016 году и использует библиотеку Git для
              хранения, управления и распределения изменений в коде. Она имеет
              множество функций, которые делают работу с ней удобной и
              эффективной, в том числе:
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Веб-интерфейс: позволяет командам управлять кодом, задачами,
              запросами на слияние и другими функциями через удобный интерфейс,
              доступный через веб-браузер;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Аутентификация и авторизация: позволяют управлять правами
              доступа пользователей к репозиториям и функциям системы;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Управление задачами: позволяет создавать задачи, назначать их
              определенным пользователям, следить за их выполнением и т.д.;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Запросы на слияние: позволяют пользователям создавать запросы на
              слияние своих изменений в основную ветку проекта и управлять
              процессом их рассмотрения и утверждения;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              - Интеграция с другими инструментами: Gitea поддерживает
              интеграцию с другими инструментами и сервисами, такими как Slack,
              GitLab и другие.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Gitea
