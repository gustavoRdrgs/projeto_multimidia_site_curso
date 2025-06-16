import { IoSearchCircleSharp } from "react-icons/io5";
import "./ExternalLinks.css";
import link1 from "../assets/link1.png";
import link2 from "../assets/link2.png";
import link3 from "../assets/link3.png";

export default function ExternalLinks() {
  return (
    <section className="external-links">
      <div className="external-links-header">
        <IoSearchCircleSharp className="search-icon" />
        <h2>Links Externos</h2>
        <div className="horizontal-line"></div>
      </div>

      <div className="external-links-grid">
        <a
          href="https://suap.uepb.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link1} alt="Link 1" />
        </a>
        <a
          href="https://nutes.uepb.edu.br/sobre.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link2} alt="Link 2" />
        </a>
        <a
          href="https://uepb.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link3} alt="Link 3" />
        </a>
      </div>
    </section>
  );
}
