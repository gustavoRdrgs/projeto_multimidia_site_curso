import { FaBook } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
          <span className="site-title">Computação</span>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/professores">
            <GiTeacher className="icon" /> Professores
          </Link>
        </li>
        <li>
          <Link to="/disciplinas">
            <FaBook className="icon" /> Disciplinas
          </Link>
        </li>
        <li>
          <Link to="/plano-curso">
            <HiAcademicCap className="icon" /> Plano de Curso
          </Link>
        </li>

        <li className="dropdown">
          <span className="dropdown-toggle">
            Informações <span className="arrow">&#9662;</span>
          </span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/tcc">Requerimento TCC</Link>
            </li>
            <li>
              <Link to="/estagio">Estágio</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
