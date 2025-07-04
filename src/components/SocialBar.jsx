import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import "./SocialBar.css";

export default function SocialBar() {
  return (
    <div className="social-bar">
      <div className="social-icons">
        <a
          href="https://t.me/+OmR1fzcJXSoxZDkx"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram />
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
        <a href="/contato">
          <MdContacts />
        </a>
      </div>
    </div>
  );
}
