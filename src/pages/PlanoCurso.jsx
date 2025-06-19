import Navbar from "../components/Navbar";
import SocialBar from "../components/SocialBar";
import "./PlanoCurso.css";

export default function PlanoCurso() {
  return (
    <>
      <SocialBar />
      <main>
        <div className="plano-container">
          <h2 className="titulo-plano">PLANO DE CURSO</h2>
          <div className="plano-header">
            <a
              href="/pdfs/plano-curso.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="botao-pdf"
            >
              Ver em tela cheia
            </a>
          </div>

          <div className="pdf-iframe-wrapper">
            <iframe
              src="/pdfs/plano-curso.pdf#zoom=100"
              title="Plano de Curso"
              width="100%"
              height="1000px"
              style={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                display: "block",
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
