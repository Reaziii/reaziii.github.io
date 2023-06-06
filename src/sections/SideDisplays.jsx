import React from "react";

const SideDisplays = () => {
  const contactitems = [
    {
      link: "https://twitter.com/reaziii",
      logo: <i class="fa-brands fa-twitter"></i>,
    },
    {
      link: "https://www.instagram.com/reaz.iii/",
      logo: <i class="fa-brands fa-instagram"></i>,
    },
    {
      link: "https://www.linkedin.com/in/reaziii",
      logo: <i class="fa-brands fa-linkedin-in"></i>,
    },
    {
      link: "https://github.com/reaziii",
      logo: <i class="fa-brands fa-github"></i>,
    },
  ];
  return (
    <>
      <div className="side-displays-right">
        <div className="contact-items">
          {contactitems.map((item, key) => (
            <div
              style={{
                animationDelay: (4 - key) * 0.1 + 0.6 + "s",
              }}
              key={key}
              className="animate animate-scale contact-item"
            >
              <a target="_blank" href={item.link}>
                {item.logo}
              </a>
            </div>
          ))}
        </div>

        <div
          style={{
            animationDelay: ".4s",
          }}
          className="animate animate-line line"
        ></div>
      </div>
      <div className="side-displays-left">
        <a
          style={{
            animationDelay: ".7s",
            animationDuration: "1s",
          }}
          target="_blank"
          href="mailto: baphonreaz@gmail.com"
          className="animate animate-opacity mail"
        >
          baphonreaz@gmail.com
        </a>
        <div
          style={{
            animationDelay: ".4s",
          }}
          className="animate animate-line line"
        />
      </div>
    </>
  );
};

export default SideDisplays;
