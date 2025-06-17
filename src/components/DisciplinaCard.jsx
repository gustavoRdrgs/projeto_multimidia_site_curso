import { useState } from "react";
import "./DisciplinaCard.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function DisciplinaCard({ nome, professor, descricao }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="disciplina-card">
      <div className="card-header" onClick={() => setExpanded(!expanded)}>
        <div>
          <h3>{nome}</h3>
          <p>{professor}</p>
        </div>
        <div className="icon">
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {expanded && (
        <>
          <hr />
          <p className="descricao">{descricao}</p>
        </>
      )}
    </div>
  );
}
