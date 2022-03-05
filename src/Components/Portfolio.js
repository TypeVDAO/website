import React, { Component } from 'react';

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
      <section id="portfolio">

        <div className="row title1">
          <h1>TYPE V DAO建设时间线</h1>
          <hr />
        </div>
        <div className="row timeMsg">
          <p>TYPE V DAO社区目前仅限邀请，我们致力于打造精品社群，以沉淀高品质产</p>
          <p>出为优先级目标，进而运营用户增长，逐步扩大社群影响力。</p>
          <p>社区NFT项目设计正在有条不紊的进行中。</p>
        </div>
      </section>
    );
  }
}

export default Portfolio;
