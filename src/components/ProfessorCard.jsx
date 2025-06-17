import "./ProfessorCard.css";

export default function ProfessorCard({
  nome,
  disciplina,
  email,
  lattes,
  imagem,
}) {
  return (
    <div className="professor-card">
      <img className="professor-foto" src={imagem} alt={`Foto de ${nome}`} />
      <div className="professor-info">
        <h3>{nome}</h3>
        <p>
          <strong>Disciplina:</strong> {disciplina}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <a href={lattes} target="_blank" rel="noopener noreferrer">
          Currículo Lattes
        </a>
      </div>
    </div>
  );
}
