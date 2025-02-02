import { useEffect, useState } from "react";
import SkillList from "../SkillList/SkillList";
import "./Skill.scss";
import {
  programingskills,
  webdevelopmentskills,
  SubjectSkills,
} from "../../data";

export default function Skill() {
  const [selected, setSelected] = useState("programingskills");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "webdevelopmentskills",
      title: "webdevelopment skills",
    },
    {
      id: "programingskills",
      title: "programing skills",
    },
    {
      id: "SubjectSkills",
      title: "Subject Skills",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "programingskills":
        setData(programingskills);
        break;
      case "webdevelopmentskills":
        setData(webdevelopmentskills);
        break;
      case "SubjectSkills":
        setData(SubjectSkills);
        break;
      default:
        setData(programingskills);
    }
  }, [selected]);

  return (
    <div className="Skill" id="Skill">
      <h1>Technical Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}