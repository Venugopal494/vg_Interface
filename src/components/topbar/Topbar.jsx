import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            VG
          </a>
          
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 630 144 166 9</span>
          </div>
          
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mekalavenugopalsai@gmail.com</span>
          </div>

          <a
            href="https://www.linkedin.com/in/mekala-venugopal-sai-b0b376195/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
              alt="LinkedIn"
              width="60"
            />
          </a>
          
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
