import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faCloudDownloadAlt, faPalette, faEye, faCode } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';
import love from './love.gif';
import colors from './colors.gif';
import shoppingCart from './shoppingCart.gif';
import dices from './dices.gif';
import shoppingList from './shoppingList.gif';
import chat from './chat.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App-header m-auto">
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
        <div id="about" className="row d-flex align-items-center m-auto">
         <div className="col-lg-3 col-md-11 col-sm-11 mx-5 mt-5">
          <h1 className="lead text-right fadeInUp">Hi, It´s me!</h1>
          <p className="text-right bounce">What I am all about.</p>
         </div>
         <div className="col-lg-6 col-md-11 col-sm-11 mx-5">
          <p className="text-justify mt-5">My name is Pilar Torres. As an artist, I came to Germany. As a web developer,
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
              <p className="mt-3">Photoshop, InDesign & Premiere<span className="col color-heading pull-right">85%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="85"></div>
              </div>
            </div>
          </div>
         </div>
        </div>
        <div id="experience" className="row d-flex align-items-center m-auto">
          <div className="col col-lg-3 col-md-11 col-sm-11 mx-5 mt-5">
            <h1 className="lead text-right">What can I offer?</h1>
            <p className="text-right">Batman would be jealous.</p>
          </div>
          <div className="col col-lg-6 col-md-11 col-sm-11 mx-5 mt-5">
            <div className="row m-auto d-flex flex-lg-nowrap">
              <div className="col col-lg-4 col-md-11 col-sm-11 card-width p-4 mb-2">
                <div className="row"><p className="col col-12 blue-color"><FontAwesomeIcon icon={faPalette} /></p></div>
                <div className="row"><p className="col col-12 lead">Creativity </p></div>
                <div className="row"><p className="col col-12">It is my way of living life and it has always helped me to decide how to achieve the objectives.</p></div>
              </div>
              <div className="col col-lg-4 col-md-11 col-sm-11 card-width reverse-color p-4 mb-2">
                <div className="row"><p className="col col-12 reverse-color"><FontAwesomeIcon icon={faEye} /></p></div>
                <div className="row"><p className="col col-12 lead reverse-color">Pixel-perfect</p></div>
                <div className="row"><p className="col col-12 reverse-color">The final delivery of the product is the most important and for that reason I love the smallest detail.</p></div>
              </div>
              <div className="col col-lg-4 col-md-11 col-sm-11 card-width p-4 mb-2">
                <div className="row"><p className="col col-12 blue-color"><FontAwesomeIcon icon={faCode} /></p></div>
                <div className="row"><p className="col col-12 lead">Interactive Code</p></div>
                <div className="row"><p className="col col-12">I am passionate about working with tools that allows us to have a much cleaner and interactive code.</p></div>
              </div>
            </div>
          </div>
          <div className="row m-auto">
            <button type="button" className="btn btn-info my-5">
             <a href="" download className="download-txt text-white"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Resume PDF</a>
            </button>
          </div>
        </div>
        <div id="projects" className="row d-flex align-items-center m-auto pb-5">
         <div className="col-lg-3 col-md-11 col-sm-11 mx-5">
          <h1 className="lead text-right">Projects</h1>
          <p className="text-right">I build the real value.</p>
         </div>
         <div className="col-lg-6 col-md-11 col-sm-11 mx-5 mt-5">
          <div className="row">
           <div className="box-projects col col-lg-7 col-md-8 col-sm-5 bg-red">
            <a href="#"><img src={chat} className="img-fluid" alt="chat" /></a>
           </div>
           <div className="box-projects col col-lg-5 col-md-4 col-sm-5 bg-herzBlue">
            <a href="#"><img src={love} className="img-fluid" alt="love" /></a>
           </div>
          </div>
          <div className="row">
           <div className="box-projects col col-lg-3 col-md-3 col-sm-5 bg-sky">
            <a href="#"><img src={shoppingCart} className="img-fluid" alt="shoppingCart" /></a>
           </div>
           <div className="box-projects col col-lg-3 col-md-3 col-sm-5 bg-darkBlue">
            <a href="#"><img src={shoppingList} className="img-fluid" alt="shoppingList" /></a>
           </div>
           <div className="box-projects col col-lg-3 col-md-3 col-sm-5 bg-purple">
            <a href="#"><img src={colors} className="img-fluid" alt="colors" /></a>
           </div>
           <div className="box-projects col col-lg-3 col-md-3 col-sm-5 bg-pale">
            <a href="#"><img src={dices} className="img-fluid" alt="dices" /></a>
           </div>
          </div>
         </div>
        </div>
        <div id="contact" className="row bg-footer d-flex align-items-center m-auto">
          <div className="col col-lg-3 col-md-11 col-sm-11 mb-5 mx-3">
           <h1 className="lead text-right mt-5">Contacts</h1>
           <p className="text-right">Hire me.</p>
          </div>
          <div className="col col-lg-6 col-md-11 col-sm-11 d-flex align-items-center mx-3 pb-5 px-5">
           <div className="row">
             <div className="col col-lg-4 col-md-3 col-xs-12 my-1">
               <p className="ml-2 pl-2 mb-0 lead">Location</p>
               <p className="ml-2 pl-2 mb-0">Berlin, Germany</p>
             </div>
             <div className="col col-lg-4 col-md-3 col-xs-12 my-1">
               <p className="ml-2 pl-2 mb-0 lead">Phone</p>
               <p className="ml-2 pl-2 mb-0">+4917620018532</p>
             </div>
             <div className="col col-lg-4 col-md-3 col-xs-12 my-1">
               <p className="ml-2 pl-2 mb-0 lead">Email</p>
               <p className="ml-2 pl-2 mb-0">pilartorres.dev@gmail.com</p>
             </div>
            </div>
          </div>
        </div>
        <footer className="footer container m-auto">
          <div className="m-auto">
           <p className="p-3 text-center">&copy;pilartorres2019</p>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
