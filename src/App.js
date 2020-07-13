import React, { Component } from "react";
import "./App.css";
import "./App2.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Intro from "./Components/Intro";

import WhatsTheSchedule from "./Components/WhatsTheSchedule";
import Schedule from "./Components/Schedule";
import dayOneData from "./Components/dayOneData";
import dayTwoData from "./Components/dayTwoData";

import MeetTheTeam from "./Components/MeetTheTeam";
import Team from "./Components/Team";
import teamData from "./Components/teamData";

import MeetTheSponsors from "./Components/MeetTheSponsors";
import Sponsors from "./Components/Sponsors";
import sponsorsData from "./Components/sponsorsData";

import Contact from "./Components/Contacts";
import FAQs from "./Components/FAQs";
import FAQData from "./Components/FAQData";
import FAQData2 from "./Components/FAQData2";
import FAQEntry from "./Components/FAQEntry";

class App extends Component {

  constructor() {
        super()
        this.state = {
            teams:teamData,
            sponsors: sponsorsData,
            dayOne: dayOneData,
            dayTwo: dayTwoData,
            firstColQuestions: FAQData,
            secondColQuestions: FAQData2
        }

    }

  render() {

     const team = this.state.teams.map(item => <Team key={item.id} item={item}/>)
     const sponsors = this.state.sponsors.map(item => <Sponsors key={item.id} item={item}/>)
     const dayOne = this.state.dayOne.map(item => <Schedule key={item.id} item={item}/>)
     const dayTwo = this.state.dayTwo.map(item => <Schedule key={item.id} item={item}/>)
     const firstColQuestions = this.state.firstColQuestions.map(item => <FAQEntry className="faq-entry" key={item.id} questionText={item.questionText} answer={item.answer}/>)
     const secondColQuestions = this.state.secondColQuestions.map(item => <FAQEntry className="faq-entry" key={item.id} questionText={item.questionText} answer={item.answer}/>)


    return (
      <div className="App">

        <Navbar />
        <Main />

        <Intro
          id="section1"
        />
        <WhatsTheSchedule
         title="Schedule"
         dayOne={dayOne}
         dayTwo={dayTwo}
         id="section2"
       />
        <MeetTheTeam
          title="Meet the team"
          subtitle={team}
          id="section3"
        />
        <MeetTheSponsors
          title="Sponsors"
          subtitle={sponsors}
          id="section4"
        />
        <FAQs
          title="FAQs"
          firstColQuestions={firstColQuestions}
          secondColQuestions={secondColQuestions}
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
