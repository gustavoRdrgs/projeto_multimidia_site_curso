import SocialBar from "../components/SocialBar";
import { MdContactPhone, MdSchedule } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";
import "./Contato.css";

export default function Contato() {
  return (
    <>
      <SocialBar />
      <main>
        <div className="contato-container">
          <h2 className="contato-titulo">CONTATO</h2>

          <div className="contato-card">
            <div className="contato-section">
              <MdContactPhone className="contato-icon" />
              <div>
                <h3>Coordenação do Curso</h3>
                <hr />
                <p>
                  <strong>Telefone:</strong> 3315-3342
                </p>
                <p>
                  <strong>Email:</strong> coord.computacao.cct@setor.uepb.edu.br
                </p>
              </div>
            </div>

            <div className="contato-section">
              <FaTelegram className="telegram-icon" />
              <div>
                <h3>Grupo do Telegram</h3>
                <hr />
                <p>
                  <strong>Link:</strong>{" "}
                  <a
                    href="https://t.me/+OmR1fzcJXSoxZDkx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://t.me/+OmR1fzcJXSoxZDkx
                  </a>
                </p>
              </div>
            </div>

            <div className="contato-section">
              <MdSchedule className="contato-icon" />
              <div>
                <h3>Horário de Funcionamento</h3>
                <hr />
                <p>De segunda à sexta</p>
                <p>Pela manhã, de 7h às 12h</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
