import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "SIL-Integrator", "Learner", "Innovator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/vg.JPG" alt="Venugopal Sai Mekala" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Venugopal Sai Mekala</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#Experience">
          <img src="assets/down.png" alt="Scroll Down" />
        </a>
      </div>
    </div>
  );
}
