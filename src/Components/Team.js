import React from "react";

export default function Team(props) {

  const teamStyle = {
    color: "#114A75"
  }

  const roleColor = {
    color: "#C0C0C0"
  }

  var yesLinkedin;
  if(props.item.url1){
    yesLinkedin = <a href={props.item.url1} target="_blank">
                  <img src={props.item.socials1} width = "20" height = "20"/></a>
  }

  var yesInsta;
  if(props.item.url2){
    yesInsta = <a href={props.item.url2} target="_blank">
              <img src={props.item.socials2} width = "20" height = "20"/></a>
  }

  var yesTwitter;
  if(props.item.url3){
    yesTwitter = <a href={props.item.url3} target="_blank">
                <img src={props.item.socials3} width = "20" height = "20"/></a>
  }
  return (

    <div class="col-lg" style={teamStyle}>

        <img class="circle" src={props.item.img} width = "180" height = "180"/>

        <h2>{props.item.name}</h2>
        <p style={roleColor}>{props.item.role}</p>

        {yesLinkedin}
        {yesInsta}
        {yesTwitter}

    </div>

  );
}
