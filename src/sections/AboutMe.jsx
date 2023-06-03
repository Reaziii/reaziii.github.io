import React from "react";
import profilepic from "../assets/db.jpg";
import database from "../data/landingpage.json";
const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="section-title">
        <div className="title-body">
          <p className="brc">{"<h3>"}</p>
          <h3>
            <span>00. </span>About Me
          </h3>
          <p className="brc">{"</h3>"}</p>
        </div>
      </div>

      <div className="about-sec">
        <div className="profilepic">
          <div className="img">
            <img src={profilepic} alt="profile" />
          </div>
        </div>
        <div className="about-me-text">
          <p className="brc">{"<p>"}</p>
          <div className="text">
            {database.bigaboutme1}
            <br />
            <br />
            {database.bigaboutme2}
          </div>
          <p className="brc">{"</p>"}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
