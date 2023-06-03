import React, { useEffect, useRef, useState } from "react";
const AnimateingText = ({ text }) => {
  const ref = useRef(null);
  let interval = useRef(null).current;
  const startAnimation = () => {
    if (interval !== null) clearInterval(interval);
    interval = setInterval(() => {
      if (ref.current) {
        const Text = ref.current.innerText;
        if (Text.length === text.length) {
          ref.current.innerText = "";
        } else {
          const temp = Text + text[Text.length];
          ref.current.innerText = temp;
        }
      }
    }, 300);
  };
  useEffect(() => {
    startAnimation();
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div ref={ref}>{text}</div>;
};
export default AnimateingText;