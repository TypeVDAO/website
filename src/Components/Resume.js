import React, { Component } from 'react';
import { Translation } from 'react-i18next';
class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }
    let style1 = {
      paddingBottom: '15px'
    }
    return (
      <Translation>
        {t => (
          <section id="resume">
            {/* <h1 className="responsive-headline"> 为什么要加入 TYPE V DAO？ </h1>
            <hr /> */}
            <div className="row title1">
              <h1 style={style1}>{t('resume.whyjoin1')}</h1>
              <h1>{t('resume.whyjoin2')}</h1>
              <hr />
            </div>
            <div className="row work">
              <div className="five columns">
                <h2>{t('resume.item1')}</h2>
                <p>{t('resume.item1Content')}</p>
              </div>
              <div className="five columns">
                <h2>{t('resume.item2')}</h2>
                <p>{t('resume.item2Content')}</p>
              </div>
            </div>
            <div className="row work">
              <div className="five columns">
                <h2>{t('resume.item3')}</h2>
                <p>{t('resume.item3Content')}</p>
              </div>
              <div className="five columns">
                <h2>{t('resume.item4')}</h2>
                <p>{t('resume.item4Content')}</p>
              </div>
            </div>
            <div className="row title2">
              <h1>{t('resume.jointime')}</h1>
              <hr />
            </div>
            <div className="row timeMsg">
              <p>{t('resume.j1')}</p>
              <p>{t('resume.j2')}</p>
              <p>{t('resume.j3')}</p>
              <p>{t('resume.j4')}</p>
              <p>{t('resume.j5')}</p>
              <p>{t('resume.j6')}</p>
            </div>

            {/* <div className="row education">
              <div className="three columns header-col">
                <h1><span>Education</span></h1>
              </div>

              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    {education}
                  </div>
                </div>
              </div>
            </div>


            <div className="row work">

              <div className="three columns header-col">
                <h1><span>Work</span></h1>
              </div>

              <div className="nine columns main-col">
                {work}
              </div>
            </div>



            <div className="row skill">

              <div className="three columns header-col">
                <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">

                <p>{skillmessage}
                </p>

                <div className="bars">
                  <ul className="skills">
                    {skills}
                  </ul>
                </div>
              </div>
            </div> */}
          </section>
        )}
      </Translation>
    );
  }
}

export default Resume;
