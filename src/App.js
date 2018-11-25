import React, { Component } from 'react';
import './components/All.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import WhatsYourName from './components/WhatsYourName';
import Projects from './components/Projects/Projects';
import WhatiLove from './components/WhatiLove';
import AcademicWorkHistory from './components/AcademicWorkHistory';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
      greetingClass: ''
    }
  }
  
  setName = (name) => {
    this.setState({ name: name.target.value })
  }
  returnGreetings = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getHours();
    let name = this.state.name;
    // particularly annoyed at the fact that I cant 5<time<12
    if (5 < time && time < 12) {
      this.setState({greeting: `Good morning, ${name}. Welcome! 🙂`})
    } else if (time === 12) {
      this.setState({greeting: `Good day, ${name}. Welcome! 🙂`})
    } else if (12 < time && time < 18) {
      this.setState({greeting: `Good afternoon, ${name}. Welcome! 🙂`})
    } else if (18 <= time || (0 <= time && time < 5)) {
      this.setState({greeting: `Good evening, ${name}. Welcome! 🙂`})
    } else {
      this.setState({greeting: `Welcome ${name} 🙂`})
    }
    this.setState({name: '', greetingClass: 'greetingshowing'})
  }

  render() {
    return (
      <div>
        <h1 id='resumeTitle'>Alex Howez Portfolio Page</h1>
        <div className='maindiv'>
          <AboutMe />
          <Skills />
          <WhatsYourName 
            handleSubmit={this.returnGreetings}
            setName={this.setName}
            greeting={this.state.greeting}
            greetingClass={this.state.greetingClass}
          />
          <AcademicWorkHistory />
          <WhatiLove />
          <Projects />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;