import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "RESTAURENT WEBSITE",
      desc:
        "This is a frontend and backend website which I built in my 4th semester using HTML, CSS, php, MySQL and JavaScript this is a website for book a table and order the food. ",
       
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Doctor consultant website with video call",
      desc:
        "This is a frontend and backend website which I built in my 6th semester using HTML, CSS and JavaScript this is a website for consult a doctor.",
       
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Temperature & Humidity Monitor",
      desc:
        "This is a frontend and backend website which I built in my 6th semester using HTML, CSS and JavaScript this is a website for consult a doctor.",
       
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src=" ./assets/proc.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}