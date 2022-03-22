import { changeLanguage } from 'i18next';
import i18n from "i18next";
import React, { Component } from 'react';
import { Translation } from 'react-i18next';

class Header extends Component {
   c() {
      console.log(i18n.language);
      if (i18n.language === 'en-US') {
         changeLanguage('zh-CN');
      } else {
         changeLanguage('en-US');
      }
   }
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
         <Translation>
            {t => (
               <header id="home">

                  <nav id="nav-wrap">

                     <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                     <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                     <a className="mobile-btn cl" href="#1" onClick={() => this.c()}><i className="fa fa-language" ></i> {(t('hearder.nav.mlocales'))} </a>
                     <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">{t('hearder.nav.home')}</a></li>
                        <li><a className="smoothscroll" href="#resume">{t('hearder.nav.about')}</a></li>
                        <li><a className="smoothscroll" href="#" onClick={() => this.c()}><i className="fa fa-language" ></i> {(t('hearder.nav.locales'))}</a></li>
                     </ul>

                  </nav>

                  <div className="row banner">
                     <div className='logo'></div>
                     <div className="banner-text">
                        <h1 className="responsive-headline"> {t('hearder.welcome')} </h1>
                        <div className='twittter-join' onClick={() => { window.location.href = 'https://twitter.com/TypeV_official'; }}></div>
                        <section>
                           <h2>
                              {t('hearder.about1')}
                           </h2>
                           <h3>
                              {t('hearder.about2')}
                           </h3>
                        </section>
                     </div>
                  </div>

               </header>
            )}
         </Translation>
      );
   }
}

export default Header;
