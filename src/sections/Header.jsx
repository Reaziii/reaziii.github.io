import React, { useEffect, useRef } from "react";
import { closebutton, logo, menu } from "../assets/svgs";
const Header = () => {
  const menuRef = useRef();
  const menuButtonRef = useRef();
  const menus = [
    {
      id: "00.",
      title: "About",
      link: "#about",
    },
    {
      id: "01.",
      title: "Skills",
      link: "#skills",
    },
    {
      id: "02.",
      title: "Experience",
      link: "#experience",
    },
    {
      id: "03.",
      title: "Portfolio",
      link: "#portfolio",
    },
    {
      id: "04.",
      title: "Contact",
      link: "#contact",
    },
  ];
  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll(".menu-item");
    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement != null) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
    window.addEventListener("click", (e) => {
      if (menuButtonRef.current && !menuButtonRef.current.contains(e.target)) {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          if (menuRef.current) {
            if (!menuRef.current.classList.contains("close")) {
              menuRef.current.classList.add("close");
            }
          }
        }
      }
    });
  }, []);

  const toggleMenu = () => {
    if (menuRef.current) {
      if (menuRef.current.classList.contains("close")) {
        menuRef.current.classList.remove("close");
      } else {
        menuRef.current.classList.add("close");
      }
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <a href="/">{logo}</a>
      </div>
      <div ref={menuButtonRef} onClick={toggleMenu} className="close-button">
        {menu}
      </div>
      <div ref={menuRef} className="menu-items close">
        <div onClick={toggleMenu} className="close-button">
          {closebutton}
        </div>
        {menus.map((item, key) => (
          <a href={item.link} key={key} className="menu-item">
            <p className="id">{item.id}</p>
            <span className="brc">{"<"} </span>
            <p className="title">{item.title}</p>
            <span className="brc"> {"/>"}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
