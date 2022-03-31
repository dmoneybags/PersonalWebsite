import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import mainPhoto from './content/me2upscale.jpg';
import resume from './content/Resume_doc.docx';
import { SocialIcon } from 'react-social-icons';
import { Route } from "react-router-dom";
import {Link} from "react-router-dom";
import App from './App';
export function makeArticle(header, p1header, p1, p2header, p2, image1, image2, video,  
  image1caption, image2caption, videocaption) {
  return {header: header, p1header: p1header, p1: p1, p2header: p2header, p2: p2, 
    image1: image1, image2: image2, video: video, image1caption: image1caption, image2caption: image2caption,
    videocaption: videocaption};
}
class AnimatedText extends React.Component{
  render() {
    return (
      <p className='AnimatedTextUp'>
        #OpenToWork
      </p>
    )
  }
}
class Sidebar extends React.Component {
  render() {
    return (
      <section className='Sidebar'>
        <div>
          <h1 className = "Title">Daniel DeMoney</h1>
          <hr></hr>
          <p style = {{color: 'white', padding: 10, marginLeft: 10, marginRight: 10, fontSize: "2vw"}}>
            3rd year business marketing student, Cal Poly Pomona
          </p>
          <div className='content'>
            <ul style = {{color: 'white', fontSize: "1em"}}>
              <li style = {{padding: 5}}>
                Completed classes in economics, operational management, marketing
              </li>
              <li style = {{padding: 5}}>
                Strong communicator and salesman
              </li>
              <li style = {{padding: 5}}>
                Experienced working with large databases
              </li>
              <li style = {{padding: 5}}>
                Able to build regression models and nueral nets to learn complex patterns
              </li>
              <li style = {{padding: 5}}>
                Proficient in Python
              </li>
              <li style = {{padding: 5}}>
                Experienced in C++, C
              </li>
              <li style = {{padding: 5}}>
                Able to program embedded systems
              </li>
              <li style = {{padding: 5}}>
                Learning React (This website!)
              </li>
            </ul>
          </div>
          <hr></hr>
          <div className = "Socials">
            <SocialIcon url="https://www.linkedin.com/in/daniel-demoney-02929016b/" fgColor="#FFFFFF" style = {{margin: "auto"}}/>
            <SocialIcon url="https://github.com/dmoneybags" fgColor="#FFFFFF" style = {{margin: "auto"}}/>
            <SocialIcon url="mailto:dandemoney@gmail.com" fgColor="#FFFFFF" style = {{margin: "auto"}}/>
          </div>
        </div>
      </section>
    );
  }
}
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  render(){
    return (
      <div className='navbar is-transparent is-spaced' style={{position: "fixed", width: "100%"}}>
        <div className="navbar-brand">
            <a 
              onClick={() => {
                this.setState({isActive: !this.state.isActive});
                console.log("showing navbar");
              }}
              role="button"
              className={`navbar-burger burger ${this.state.isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>
        <div className={`navbar-menu ${this.state.isActive ? "is-active" : ""}`}>
          <Link className="navbar-item" to="/">
            Overview
          </Link>
          <a className="navbar-item" href={resume} download>
            Resume
          </a>
          <Link className="navbar-item" to="/Goals">
            Goals
          </Link>
          <Link className="navbar-item" to="/Work">
            Work Experience
          </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
            Extracurriculars
          </a>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" to="/Hatchery">
            Project Hatchery
          </Link>
          <Link className="navbar-item" to="/PLTW">
            PLTW
          </Link>
        </div>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Personal Projects
        </a>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" to="/ECGNET">
            ECGNET
          </Link>
          <Link className="navbar-item" to="/2048">
            2048
          </Link>
          <Link className="navbar-item" to="/PokemonAi">
            Pokemon Ai
          </Link>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
class MainImage extends React.Component {
  render() {
    return (
      <div className='ImageContainer'>
        <img src = {mainPhoto} style = {{ objectFit: 'contain', width: '100%'}}></img>
        <p className='Caption'>Sunny Cove in Santa Cruz, March 26th 2021</p>
      </div>
    )
  }
}
export class MainOverview extends React.Component {
  render() {
    return (
      <section id = "Overview">
        <div style = {{position: 'relative', textAlign: 'center'}}>
            <MainImage />
            <AnimatedText />
        </div>
        <h1 className='AnimatedTextSide'>Overview:</h1>
        <p style={{padding: "20px"}}>Hi, my name is Daniel DeMoney (yes, pronounced like "the money") and I coded
          this website from scratch using ReactJs. 
          I'm looking to join a motivated sales or market analysis team for the 2022 summer internship season.
          My skills include being a natural communicator, sharp knowledge of software, and being highly devoted to
          self improvement. One of my main goals regarding an internship is to learn the ins and outs of software
          sales, as hope to start my own software company. I am also looking to collaborate with a group of like-minded 
          individuals. If you feel like I have what you're looking for, feel free to email me 
          <a href='mailto:dandemoney@gmail.com'> here</a>.
          </p>
      </section>
    )
  }
}
export function MainSection(props){
  return (
    <section>
      <Sidebar />
      <section className = "MainScollbar">
        <NavBar />
        <div className = 'Content'>{props.view}</div>
      </section>
    </section>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals