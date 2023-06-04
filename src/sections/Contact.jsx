import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-me">
      <div className="section-title">
        <div className="title-body">
          <p className="brc">{"<h3>"}</p>
          <h3>
            <span>04. </span>Get In Touch
          </h3>
          <p className="brc">{"</h3>"}</p>
        </div>
      </div>

      <div className="contact">
        <p>
          {" "}
          Feel free to reach out to me directly via email at{" "}
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              navigator.clipboard.writeText("baphonreaz@gmail.com");
            }}
            title="copy"
          >
            baphonreaz@gmail.com
          </span>
          . I'd be happy to hear from you
          <br /> and discuss any inquiries, projects, or collaborations.
        </p>

        <a href="mailto: baphonreaz@gmail.com">
          <button className="say-hello-button">Say Hello</button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
