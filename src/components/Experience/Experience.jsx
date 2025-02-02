import React from "react";
import "./Experience.scss";

export default function Experience() {
  const currentYear = new Date().getFullYear();
  const data = [
    {
      id: 1,
      name: "ZF Groups, Hyderabad",
      year: `2022 - ${currentYear}`,
      title: "SIL Engineer",
      role: "As an ADAS SIL Integrator, I focus on integrating, testing, and validating software systems for advanced driver-assistance systems (ADAS). My role involves creating virtual test environments to simulate real-world driving scenarios and validate ADAS software for functionality, performance, and safety.",
      tools: "Tools: SIL System Integration, C++, Python, QT, Docker, Linux",
      icon: "assets/ZF.svg.png",
      featured: true,
    },
  ];

  return (
    <div className="experience" id="Experience">
      <h1>Experience</h1>
      <div className="experience-container">
        {data.map((d) => (
          <div key={d.id} className={`experience-card ${d.featured ? "featured" : ""}`}>
            <div className="experience-top">
              <img className="experience-icon" src={d.icon} alt={`${d.name} logo`} />
            </div>
            <div className="experience-content">
              <h3 className="experience-name">{d.name}</h3>
              <h4 className="experience-title">{d.title}</h4>
              <h5 className="experience-year">{d.year}</h5>
              <p className="experience-role">{d.role}</p>
              <p className="experience-tools">{d.tools}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
