import React, { Component } from "react";
import profile from "../assets/profile.jpg";
import "../index.css";

class card extends Component {
  render() {
    return (
      <>
        <div className={`card_${this.props.color}`}>
          <div className="frame">
            <img className="profile" src={profile} alt="profile" />
          </div>
          <div>
            <h4 className={`name_${this.props.color}`}>Yuvraj Kaushal</h4>
            <p className="designation">Ethical Hacker</p>
            <a className="card-button" target="_blank" href="https://www.instagram.com/invites/contact/?i=1hcag5vdomjps&utm_content=1bn0iaq">
              Follow
            </a>
            <div className="togggle" />
          </div>
        </div>
      </>
    );
  }
}

export default card;
