import React, { useEffect } from "react";
import landingpagedata from "../data/landingpage.json";
import AnimateingText from "../components/AnimateingText";
import { name, borderbuttonsvg, resumebuttonbackground1 } from "../assets/svgs";
const LandingPage = () => {
  const downloadResume = () => {};
  return (
    <section id="#home" className="landing-page">
      <div className="landing-details">
        <div className="tag tab1">
          <div className="brc">{"<p>"}</div>
          <p>Hello, my name is</p>
          <div className="brc">{"</p>"}</div>
        </div>
        <div className="tag tab2">
          <div className="brc">{"<h1>"}</div>
          <h1 id="landingsvg" className="landingsvg">
            {name}
          </h1>
          <div className="brc">{"</h1>"}</div>
        </div>

        <div className="tag tab2 tab4">
          <div className="brc">{"<h1>"}</div>
          <h1>Building Scalable and Robust Software Solutions</h1>
          <div className="brc">{"</h1>"}</div>
        </div>

        <div className="tag tab3">
          <div className="brc">{"<p>"}</div>
          <p>{landingpagedata.landingabout}</p>
          <div className="brc">{"</p>"}</div>
        </div>
      </div>
      <div className="download-resume">
        <a target="_blank" href="/assets/reazahammed.pdf">
          <div className="download-button">
            <div className="box">{borderbuttonsvg}</div>
            <div className="box box2">{borderbuttonsvg}</div>

            <div className="under-box">
              <div className="background">{"</>"}</div>
              <div className="background bg2">{resumebuttonbackground1}</div>
              <div className="background bg3"></div>
              <div className="brc">{"<>"}</div>
              <p>
                <AnimateingText text={"RESUME"} />
              </p>
              <div className="brc">{"</>"}</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
