import React, { Component } from "react";
import "./App.css";
import "./App2.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Intro from "./Components/Intro";

import WhatsTheSchedule from "./Components/WhatsTheSchedule";
import Schedule from "./Components/Schedule";
import schedulesData from "./Components/schedulesData";

import MeetTheTeam from "./Components/MeetTheTeam";
import Team from "./Components/Team";
import teamData from "./Components/teamData";

import MeetTheSponsors from "./Components/MeetTheSponsors";
import Sponsors from "./Components/Sponsors";
import sponsorsData from "./Components/sponsorsData";

import Contact from "./Components/Contacts";
import FAQs from "./Components/FAQs";

class App extends Component {

  constructor() {
        super()
        this.state = {
            teams:teamData,
            sponsors: sponsorsData,
            schedule: schedulesData
        }

    }

  render() {

     const team = this.state.teams.map(item => <Team key={item.id} item={item}/>)
     const sponsors = this.state.sponsors.map(item => <Sponsors key={item.id} item={item}/>)
     const schedule = this.state.schedule.map(item => <Schedule key={item.id} item={item}/>)


    return (
      <div className="App">

        <Navbar />
        <Main />

        <Intro
          dark={true}
          id="section1"
        />
        <WhatsTheSchedule
         title="schedule"
         subtitle={schedule}
         dark={false}
         id="section2"
       />
        <MeetTheTeam
          title="meet the team"
          subtitle={team}
          dark={true}
          id="section3"
        />
        <MeetTheSponsors
          title="sponsors"
          subtitle={sponsors}
          dark={false}
          id="section4"
        />
        <FAQs
          title="FAQs"
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
