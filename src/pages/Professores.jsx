import { FiExternalLink } from "react-icons/fi";
import ProfessorCard from "../components/ProfessorCard";
import "./Professores.css";
import prof1 from "../assets/prof1.jpeg";
import prof2 from "../assets/prof2.jpg";

const professores = [
  {
    nome: "Prof. Daniel Marques",
    disciplina: "Sistemas Multimídia",
    email: "danielmarques@servidor.uepb.edu.br",
    lattes: "http://lattes.cnpq.br/4103540054940166",
    foto: prof1,
  },
  {
    nome: "Profª. Maria Oliveira",
    disciplina: "Algoritmos",
    email: "maria.oliveira@universidade.edu",
    lattes: "https://lattes.cnpq.br/987654321",
    foto: prof2,
  },
  {
    nome: "Prof. João Mendes",
    disciplina: "Matemática Discreta I",
    email: "joao.mendes@universidade.edu",
    lattes: "https://lattes.cnpq.br/123456789",
    foto: prof2,
  },
  {
    nome: "Profª. Larissa Lima",
    disciplina: "Linguagem de Programação I",
    email: "larissa.lima@universidade.edu",
    lattes: "https://lattes.cnpq.br/456789123",
    foto: prof2,
  },
  {
    nome: "Prof. Ricardo Alves",
    disciplina: "Organização de Computadores",
    email: "ricardo.alves@universidade.edu",
    lattes: "https://lattes.cnpq.br/654321987",
    foto: prof2,
  },
  {
    nome: "Profª. Camila Rocha",
    disciplina: "Estrutura de Dados",
    email: "camila.rocha@universidade.edu",
    lattes: "https://lattes.cnpq.br/112233445",
    foto: prof2,
  },
  {
    nome: "Prof. Felipe Souza",
    disciplina: "Sistemas Operacionais",
    email: "felipe.souza@universidade.edu",
    lattes: "https://lattes.cnpq.br/998877665",
    foto: prof2,
  },
  {
    nome: "Profª. Beatriz Ferreira",
    disciplina: "Cálculo Numérico",
    email: "beatriz.ferreira@universidade.edu",
    lattes: "https://lattes.cnpq.br/334455667",
    foto: prof2,
  },
  {
    nome: "Prof. André Santos",
    disciplina: "Lógica para Computação",
    email: "andre.santos@universidade.edu",
    lattes: "https://lattes.cnpq.br/776655443",
    foto: prof2,
  },
  {
    nome: "Profª. Juliana Martins",
    disciplina: "Computação Gráfica",
    email: "juliana.martins@universidade.edu",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
];

export default function Professores() {
  return (
    <main>
      <div className="professores-container">
        <h2 className="titulo">NOSSO CORPO DOCENTE</h2>
        <div className="professores-lista">
          {professores.map((prof, index) => (
            <div key={index} className="prof-card">
              <img src={prof.foto} alt={prof.nome} className="prof-img" />
              <div className="prof-info">
                <h3>{prof.nome}</h3>
                <p>{prof.disciplina}</p>
                <p>{prof.email}</p>
                <a href={prof.lattes} target="_blank" rel="noopener noreferrer">
                  Currículo Lattes{" "}
                  <FiExternalLink style={{ marginLeft: "4px" }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
