import React, { Component } from "react";
import "./App.css";
import "./App2.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Section from "./Components/Section";
import Intro from "./Components/Intro";
import schedule from "./Components/Schedule";
import teamData from "./Components/teamData";
import Team from "./Components/Team";
import sponsors from "./Components/Sponsors";
import Contact from "./Components/Contacts";

class App extends Component {

  constructor() {
        super()
        this.state = {
            teams:teamData
        }

    }

  render() {

     const team = this.state.teams.map(item => <Team key={item.id} item={item}/>)


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
          title="meet the team"
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
          subtitle={sponsors}
          dark={true}
          id="section5"
        />
        <Contact
          title="Contact"
          id="section6"
        />
      </div>
    );
  }
}

export default App;
