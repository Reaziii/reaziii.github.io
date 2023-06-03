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
            <div key={key} className="contact-item">
              <a target="_blank" href={item.link}>
                {item.logo}
              </a>
            </div>
          ))}
        </div>

        <div className="line"></div>
      </div>
      <div className="side-displays-left">
        <a target="_blank" href="mailto: baphonreaz@gmail.com" className="mail">baphonreaz@gmail.com</a>
        <div className="line"></div>
      </div>
    </>
  );
};

export default SideDisplays;
