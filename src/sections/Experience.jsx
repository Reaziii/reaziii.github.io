import React, { useState } from "react";
import experiences from "../data/experiences.json";
const Experience = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="experience" className="experience">
      <div className="section-title">
        <div className="title-body">
          <p className="brc">{"<h3>"}</p>
          <h3>
            <span>02. </span>Experience
          </h3>
          <p className="brc">{"</h3>"}</p>
        </div>
      </div>

      <div className="my-experience">
        <div className="titles">
          {experiences.map((item, key) => (
            <div
              onClick={() => setActive(key)}
              key={key}
              className={"job-title" + (active === key ? " active" : "")}
            >
              {item.company}
            </div>
          ))}
          <div
            style={{
              height: experiences.length * 40,
            }}
            className="side-bar2"
          />
          <div
            style={{
              top: active * 40,
            }}
            className="side-bar"
          />
        </div>

        <div className="work-details">
          <h1>
            {experiences[active].title}{" "}
            <span>@{experiences[active].company}</span>
          </h1>
          <h2>
            {experiences[active].started} - {experiences[active].ended}
          </h2>
          <div className="works">
            {experiences[active].works.map((item, key) => (
              <div key={key} className="work">
                <div className="dot" />
                <p className="det">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
