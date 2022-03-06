import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#resume">About</a></li>
                  {/* <li><a className="smoothscroll" href="#portfolio">Plan</a></li> */}
               </ul>

            </nav>

            <div className="row banner">
               <div className='logo'></div>
               <div className="banner-text">
                  <h1 className="responsive-headline"> 专业的Web3.0中文社区 </h1>
                  <div className='twittter-join' onClick={() => { window.location.href = 'https://twitter.com/TypeV_official'; }}></div>
                  <h3>
                     我们的名字源于天文学家尼古拉·卡尔达肖夫定义的宇宙文明层次（卡尔达肖夫指数）的顶峰——第V级（第五级），意味着该文明可以利用多元宇宙的所有能量。
                  </h3>
                  <h3>
                     借用这一比喻，希望能够吸引一群长期看好Web3.0行业前景，且执行力、学习能力强的小伙伴，聚在一起学习和互助，最终通过投资数字资产或开发Web3.0项目取得经济收益，同时收获快乐和归属感，打造专业的Web3.0中文社区。
                  </h3>
               </div>
            </div>

         </header>
      );
   }
}

export default Header;
