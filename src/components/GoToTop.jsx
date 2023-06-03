import React, { useEffect, useRef } from "react";

const GoToTop = () => {
  const ref = useRef();
  useEffect(() => {
    window.onscroll = () => {
      const height = window.scrollY;
      if (height > 100) {
        ref.current.style.opacity = "1";
      } else {
        ref.current.style.opacity = "0";
      }
    };
  }, []);

  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      }}
      ref={ref}
      className="go-to-top"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  );
};

export default GoToTop;
