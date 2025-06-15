import { FaBook } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi2";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo do site" />
        <span className="logo-text">Computação</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <HiAcademicCap className="icon" /> Plano de curso
          </a>
        </li>
        <li>
          <a href="#">
            <GiTeacher className="icon" /> Professores
          </a>
        </li>
        <li>
          <a href="#">
            <FaBook className="icon" /> Disciplinas
          </a>
        </li>

        <li className="dropdown">
          <span className="dropdown-toggle">
            Informações <span className="arrow">&#9662;</span>
          </span>
          <ul className="dropdown-menu">
            <li>
              <a href="#">TCC</a>
            </li>
            <li>
              <a href="#">Estágio</a>
            </li>
            <li>
              <a href="#"> Contato</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
