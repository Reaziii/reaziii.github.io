import React from "react";
import c from "../assets/c.svg";
import cplus from "../assets/cplus.svg";
import js from "../assets/javascript.svg";
import csharp from "../assets/csharp.svg";
import bootstrap from "../assets/bootstrap.svg";
import express from "../assets/express.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import nodejs from "../assets/nodejs.svg";
import tello from "../assets/trello.svg";
import notion from "../assets/notion.svg";
import mongodb from "../assets/mongodb.svg";
import gitlab from "../assets/gitlab.svg";
import scss from "../assets/sass.svg";
import css from "../assets/css.svg";
import slack from "../assets/slack.svg";
import firebase from "../assets/firebase.svg";
import unity from "../assets/unity.svg";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.svg";
import mysql from "../assets/mysql.svg";
import androidstudio from "../assets/androidstudio.svg";
import aws from "../assets/aws.svg";
import php from "../assets/php.svg";
const Skills = () => {
  const dev_skills = [
    {
      icon: c,
      name: "c",
    },
    {
      icon: cplus,
      name: "c++",
    },
    {
      icon: js,
      name: "javascript",
    },
    {
      icon: typescript,
      name: "typescript",
    },
    {
      icon: csharp,
      name: "c#",
    },
    {
      icon: mongodb,
      name: "mongodb",
    },
    {
      icon: express,
      name: "express",
    },
    {
      icon: react,
      name: "react js | native",
    },
    {
      icon: nodejs,
      name: "NODE JS",
    },

    {
      icon: unity,
      name: "unity",
    },

    {
      icon: github,
      name: "github",
    },
    {
      icon: gitlab,
      name: "gitlab",
    },
    {
      icon: notion,
      name: "NOTION",
    },
    {
      icon: tello,
      name: "TRELLO",
    },
    {
      icon: html,
      name: "HTML",
    },
    {
      icon: css,
      name: "css",
    },
    {
      icon: scss,
      name: "SCSS",
    },
    {
      icon: bootstrap,
      name: "bootstrap",
    },
    {
      icon: slack,
      name: "slack",
    },
    {
      icon: firebase,
      name: "firebase",
    },
    {
      icon: mysql,
      name: "SQL",
    },
    {
      icon: androidstudio,
      name: "android",
    },
    {
      icon: aws,
      name: "AWS",
    },
    {
      icon: php,
      name: "PHP",
    },
  ];
  return (
    <section id="skills" className="skills">
      <div className="expertise">
        <div className="section-title">
          <div className="title-body">
            <p className="brc">{"<h3>"}</p>
            <h3>
              <span>01. </span>Skills
            </h3>
            <p className="brc">{"</h3>"}</p>
          </div>
        </div>

        <div className="my-skills">
          {dev_skills.map((item, key) => (
            <div key={key} className="skill">
              <img src={item.icon} alt="" className="icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
