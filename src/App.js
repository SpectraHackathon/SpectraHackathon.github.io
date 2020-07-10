import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Section from "./Components/Section";
import Intro from "./Components/Intro";
import schedule from "./Components/Schedule";
import team from "./Components/Team";
import sponsors from "./Components/Sponsors";
import contact from "./Components/Contacts";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <Main />

        <Intro
          dark={true}
          id="section1"
        />
        <Section
          title="schedule"
          subtitle={schedule}
          dark={false}
          id="section2"
        />
        <Section
          title="team"
          subtitle={team}
          dark={true}
          id="section3"
        />
        <Section
          title="sponsors"
          subtitle={sponsors}
          dark={false}
          id="section4"
        />
        <Section
          title="FAQs"
          subtitle={contact}
          dark={true}
          id="section5"
        />
        <Section
          title="contact"
          subtitle={contact}
          dark={false}
          id="section6"
        />
      </div>
    );
  }
}

export default App;
