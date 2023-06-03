import React from "react";
const Header = () => {
  const menus = [
    {
      id: "00.",
      title: "About",
      link: "#about",
    },
    {
      id: "01.",
      title: "Experience",
      link: "#experience",
    },
    {
      id: "02.",
      title: "Projects",
      link: "#projects",
    },
    {
      id: "03.",
      title: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div className="header">
      <div className="logo">
        <a href="/">Reaz Ahammed</a>
      </div>
      <div className="menu-items">
        {menus.map((item, key) => (
          <a href={item.link} key={key} className="menu-item">
            <p className="id">{item.id}</p>
            <span className="brc">{"<"} </span>
            <p className="title">{item.title}</p>
            <span className="brc"> {"/>"}</span>
          </a>
        ))}
        <a href="/download" className="resume-download">
          <button className="button1">
            <p>{"<Download CV/>"}</p>
          </button>
        </a>
      </div>
  
    </div>
  );
};

export default Header;
