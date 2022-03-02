import React, { Component } from 'react';

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

    return (
      <section id="resume">
        {/* <h1 className="responsive-headline"> 为什么要加入 TYPE V DAO？ </h1>
        <hr /> */}
        <div className="row title1">
          <h1>为什么要加入</h1>
          <h1>TYPE V DAO？</h1>
          <hr />
        </div>
        <div className="row work">
          <div className="five columns">
            <h2>数字资产个人投资者</h2>
            <p>加入学习型组织，追踪复杂多变的行业发展和市场走势，探索严谨的结构化方法论，去捕捉不同细分市场的机会，授之以鱼不如授之以渔</p>
          </div>
          <div className="five columns">
            <h2>Web3.0 项目方</h2>
            <p>加入创业者大本营，探讨技术难题，对接Web3.0 相关从业人员和资源方，甚至获得TVD社区官方支持，协助创意和灵感快速落地。</p>
          </div>
        </div>
        <div className="row work">
          <div className="five columns">
            <h2>兼职/全职工作机会</h2>
            <p>加入公会与小组，学习Web3.0 实用技能，参与公会任务获取报酬并打造一份加密世界里独一无二的个人简历。</p>
          </div>
          <div className="five columns">
            <h2>专业投资机构和资源方</h2>
            <p>深入TVD社区活动，细致入微观察行业，高效识别专业可靠的Web3.0 创业者/从业人员，并与社区共享资源，优先支持及孵化早期项目，取得机构收益。</p>
          </div>
        </div>
        <div className="row title2">
          <h1>如何平衡参与时间？</h1>
          <hr />
        </div>
        <div className="row timeMsg">
          <p>根据个人时间安排，可以自由选择参与的形式。比如每天轻松地在咖啡时间翻翻TYPE V DAO提供的高质量研报；也可以与社区内的开发者、投资人或艺术家们深度探讨各自的想法；亦或是选择成为一个全职/兼职的社区建设者。TYPE V DAO致力于打造Web 3.0世界的中文社区大本营，每个小伙伴都可以在这片乐土找到自己的舒适区。</p>
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
    );
  }
}

export default Resume;
