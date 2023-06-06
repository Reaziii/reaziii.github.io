import React, { useEffect } from "react";
import landingpagedata from "../data/landingpage.json";
import AnimateingText from "../components/AnimateingText";
import {
  name,
  borderbuttonsvg,
  resumebuttonbackground1,
  RadatDotLine,
} from "../assets/svgs";
const LandingPage = () => {
  const downloadResume = () => {};
  return (
    <section id="#home" className="landing-page">
      <div className="animate animate-bottom landing-details">
        <div className="tag tab1">
          <div className="brc">{"<p>"}</div>
          <p>Hello, I am</p>
          <div className="brc">{"</p>"}</div>
        </div>
        <div
          style={{
            animationDelay: ".2s",
          }}
          className="animate animate-bottom tag tab2"
        >
          <div className="brc">{"<h1>"}</div>
          <h1 id="landingsvg" className="landingsvg">
            {name}
          </h1>
          <div className="brc">{"</h1>"}</div>
        </div>

        <div
          style={{
            animationDelay: ".4s",
          }}
          className="animate animate-bottom tag tab2 tab4"
        >
          <div className="brc">{"<h2>"}</div>
          <h1>Building Scalable and Robust Software Solutions</h1>
          <div className="brc">{"</h2>"}</div>
        </div>

        <div
          style={{
            animationDelay: ".6s",
          }}
          className="animate animate-bottom tag tab3"
        >
          <div className="brc">{"<p>"}</div>
          <p>{landingpagedata.landingabout}</p>
          <div className="brc">{"</p>"}</div>
        </div>
      </div>
      <div
        style={{
          animationDelay: ".7s",
        }}
        className="animate animate-scale download-resume"
      >
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
