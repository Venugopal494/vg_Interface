import "./Education.scss";

export default function Education() {
  const data = [
    {
      id: 1,
      name: "Narayana e-techno School",
      year: "2016",
      title: "10th Standard ",
      CGPA: "CGPA : 8.3",
      course: "course : SSC",
      icon: "assets/Logo-1.png",
       
    },
    {
      id: 2,
      name: "SRM University AP",
      year: "2018-2022",
      title: "B-TECH",
      CGPA: "CGPA : 8.0",
      course: "course : CSE",
      icon: "assets/Logo-2.png",
      featured: true,
    },
    {
      id: 3,
      name: "Narayana Jr College",
      year: "2016-2018",
      title: "Intermediate",
      CGPA: "Percentage : 80%",
      icon: "assets/Logo-1.png",
      course: "course : MPC",
    },
  ];
  return (
    <div className="Education" id="Education">
      <h1>Education</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <h4>{d.title}</h4>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
              
              <img className="right" src={d.icon} alt="" />
            </div>
            <h3>{d.name}</h3>
            <h3>{d.year}</h3>
            <h3>{d.CGPA}</h3>
            <h3>{d.course}</h3>
            <div className="bottom">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}