import SocialBar from "../components/SocialBar";
import "./TCC.css";

export default function TCC() {
  return (
    <>
      <SocialBar />
      <main>
        <div className="plano-container">
          <h2 className="titulo-plano">REQUERIMENTO DE TCC</h2>
          <div className="plano-header">
            <a href="/pdfs/requerimento.pdf" download>
              <button>📥 Baixar Requerimento</button>
            </a>
          </div>

          <div className="pdf-iframe-wrapper">
            <iframe
              src="/pdfs/requerimento.pdf#zoom=100"
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
