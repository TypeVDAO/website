import React, { Component } from 'react';
import { Translation } from 'react-i18next';
class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <Translation>
        {t => (
          <section id="portfolio">

            <div className="row title1">
              <h1>{t('portfolio.title')}</h1>
              <hr />
            </div>
            <div className="row timeMsg">
              <p>{t('portfolio.t1')}</p>
              <p>{t('portfolio.t2')}</p>
              <p>{t('portfolio.t3')}</p>
            </div>
          </section>
        )}
      </Translation>
    );
  }
}

export default Portfolio;
