import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Skill from "./components/Skills/Skill"
import Works from "./components/works/Works"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience";
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Experience/>
       <Education/>
       <Skill/>
       <Works/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;