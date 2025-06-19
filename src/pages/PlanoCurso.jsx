import { Document, Page, pdfjs } from "react-pdf";
import SocialBar from "../components/SocialBar";
import "./PlanoCurso.css";

// Configura o worker do pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PlanoCurso() {
  return (
    <>
      <SocialBar />
      <div className="pdf-container">
        <Document
          file="https://drive.google.com/uc?export=download&id=1nWoB5RBmgUAKgpxcqtuffVkiPe4GSYia" // Substitua aqui
          loading="Carregando PDF..."
          error="Erro ao carregar o PDF."
          noData="Nenhum arquivo foi fornecido."
        >
          <Page pageNumber={1} width={900} />
        </Document>
      </div>
    </>
  );
}
