import React, { Component, Suspense } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Resume from './Components/Resume';
// import Portfolio from './Components/Portfolio';

const loading = (
  <div>
    TypeVdao loading...
  </div>
)

const Header = React.lazy(() => import('.//Components/Header'));
const Resume = React.lazy(() => import('.//Components/Resume'));
const Portfolio = React.lazy(() => import('.//Components/Portfolio'));
const Footer = React.lazy(() => import('.//Components/Footer'));

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('G-2K990L8BF7');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    //this.getResumeData();
  }

  render() {
    return (
      <Suspense fallback={loading}>
        <div className="App">
          <Header data={this.state.resumeData.main} />
          <Resume data={this.state.resumeData.resume} />
          <Portfolio data={this.state.resumeData.portfolio} />
          <Footer data={this.state.resumeData.main} />
        </div>
      </Suspense>

    );
  }
}

export default App;
