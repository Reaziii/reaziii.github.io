import React from "react";
import showcases from "../data/showcases.json";
import xplayer from "../assets/xplayer.png";
import ecomshop from "../assets/ecomshop.png";
import safeexchange from "../assets/safeexchange.png";
import peertopeer from "../assets/peertopeer.png";
const images = {
  xplayer,
  ecomshop,
  safeexchange,
  peertopeer,
};
const urlicons = {
  github: <i class="fa-brands fa-github"></i>,
  link: <i class="fa-solid fa-globe"></i>,
};
const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="section-title">
        <div className="title-body">
          <p className="brc">{"<h3>"}</p>
          <h3>
            <span>03. </span>Portfolio
          </h3>
          <p className="brc">{"</h3>"}</p>
        </div>
      </div>

      <div className="my-portfolio">
        {showcases.map((item, key) => (
          <SinglePortFolio key={key} id={key} />
        ))}
      </div>
    </section>
  );
};

const SinglePortFolio = ({ id }) => {
  return (
    <div className="portfolio-item">
      <p>Featured Project</p>

      <img src={images[showcases[id].banner]} alt="" className="banner" />

      <h1>{showcases[id].title}</h1>
      <div className="date">
        <div className="br"></div>
        <i class="fa-regular fa-calendar"></i> <span>{showcases[id].year}</span>
      </div>
      <div className="links">
        {showcases[id].links.map((item, key) => (
          <a target="_blank" href={item.url} key={key} className="link-item">
            {urlicons[item.icon]}
          </a>
        ))}
      </div>
      <ul className="features">
        {showcases[id].features.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>

      <ul className="technologies">
        {showcases[id].technology.map((item, key) => (
          <li key={key} className="tech">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
