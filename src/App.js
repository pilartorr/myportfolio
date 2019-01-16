import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App-header">
          <div className="row blue-line">
            <div className="col d-flex align-items-center mx-5 my-3">
              <a href="#home"><img src={logo} className="logo" alt="logo" /></a>
            </div>
            <div className="col d-flex align-items-center">
              <ul className="nav">
               <li className="nav-item-container"><a className="nav-item" href="#home">Home</a></li>
               <li className="nav-item-container"><a className="nav-item" href="#about">About</a></li>
               <li className="nav-item-container"><a className="nav-item" href="#experience">Experience</a></li>
               <li className="nav-item-container"><a className="nav-item" href="#projects">Projects</a></li>
               <li className="nav-item-container"><a className="nav-item" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="row row-content d-flex align-items-center">
            <div className="col-sm-6 m-5">
              <div className="white-line">
                <h1 className="title font-weight-bold display-3">PILAR TORRES</h1>
                <p className="subtitle lead h1 mt-4">I am a creative Front-end Developer</p>
              </div>
              <ul className="nav">
                <li><a href="https://www.linkedin.com/in/pilar-torres/" className="social-icons mr-3"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a href="https://github.com/pilartorr" className="social-icons mr-3"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://accounts.google.com" className="social-icons mr-3"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row section-height d-flex align-items-center" id="about">
         <div className="col col-size-30 m-5">
          <h1 className="lead text-right ">Hi, It´s me!</h1>
          <p className="text-right">What I am all about.</p>
         </div>
         <div className="col col-size-70 m-5">
          <p className="text-justify">My name is Pilar Torres. As an artist, I came to Germany. As a web developer,
             I grow up here. It make me very happy to share my creativity with you and be able
             to offer to the world of technology a future full of new ideas.
          </p>
          <div className="container-progress-box my-5">
            <div className="progress-box">
              <p className="mt-3">HTML5, CSS3 & Bootstrap<span className="color-heading pull-right">90%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="90"></div>
              </div>
            </div>
            <div className="progress-box">
              <p className="mt-3">JavaSript & jQuery<span className="color-heading pull-right">80%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="80"></div>
              </div>
            </div>
            <div className="progress-box">
              <p className="mt-3">React & Redux<span className="color-heading pull-right">75%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="75"></div>
              </div>
            </div>
            <div className="progress-box">
              <p className="mt-3">Nodejs, Express & MongoDB<span className="color-heading pull-right">50%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="50"></div>
              </div>
            </div>
            <div className="progress-box">
              <p className="mt-3">Photoshop, InDesign & Premiere<span className="color-heading pull-right">85%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="85"></div>
              </div>
            </div>
          </div>
         </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
