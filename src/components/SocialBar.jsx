import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import "./SocialBar.css";

export default function SocialBar() {
  return (
    <div className="social-bar">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/UEPBOficial"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/compuepb/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://x.com/uepbonline" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <MdContacts />
        </a>
      </div>
    </div>
  );
}
