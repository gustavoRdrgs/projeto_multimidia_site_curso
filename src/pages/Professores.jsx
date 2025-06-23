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
    nome: "Profª. Ana Isabella Muniz Leite",
    disciplina:
      "Engenharia de Software I, Gerência de Projetos, Tópicos Especiais em Engenharia de Software.",
    email: "isabella@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/987654321",
    foto: prof2,
  },
  {
    nome: "Prof. Antonio Carlos de Albuquerque",
    disciplina: "Matemática Discreta I",
    email: "antoniocarlosdc@uepb.edu.br",
    lattes: "https://lattes.cnpq.br/123456789",
    foto: prof2,
  },
  {
    nome: "Profª. Cheyenne Ribeiro Guedes Isidro",
    disciplina: "Linguagem de Programação I",
    email: "charibeiro@servidor.uepb.edu.br ",
    lattes: "https://lattes.cnpq.br/456789123",
    foto: prof2,
  },
  {
    nome: "Prof. Daniel Scherer",
    disciplina: "Organização de Computadores",
    email: "scherer@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/654321987",
    foto: prof2,
  },
  {
    nome: "Prof. Dunfrey Pires Aragão",
    disciplina: "Estrutura de Dados",
    email: "dunfrey.aragao@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/112233445",
    foto: prof2,
  },
  {
    nome: "Prof. Edson Holanda Cavalcante Junior",
    disciplina: "Sistemas Operacionais",
    email: "edsonholanda@uepb.edu.br",
    lattes: "https://lattes.cnpq.br/998877665",
    foto: prof2,
  },
  {
    nome: "Prof. Eduardo Jorge Valadares Oliveira ",
    disciplina: "Cálculo Numérico",
    email: "edujvo@servidor.uepb.edu.br ",
    lattes: "https://lattes.cnpq.br/334455667",
    foto: prof2,
  },
  {
    nome: "Prof. Fábio Luiz Leite Júnior",
    disciplina: "Lógica para Computação",
    email: "fabioleite@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/776655443",
    foto: prof2,
  },
  {
    nome: "Prof. Frederico Moreira Bublitz",
    disciplina: "Computação Gráfica",
    email: "fredbublitz@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Prof. Janderson Jason Barbosa Aguiar",
    disciplina: "Computação Gráfica",
    email: "janderson@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Profª. Katia Elizabete Galdino",
    disciplina: "Computação Gráfica",
    email: "katiagaldino@gmail.com",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Profª. Kézia de Vasconcelos Oliveira Dantas",
    disciplina: "Computação Gráfica",
    email: "kezia.vasconcelos@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Profª. Luciana de Queiroz Leal Gomes",
    disciplina: "Computação Gráfica",
    email: "lucianaleal@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Prof. Misael Elias de Morais",
    disciplina: "Computação Gráfica",
    email: "moraiscg@gmail.com ",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Prof. Paulo Eduardo e Silva Barbosa",
    disciplina: "Computação Gráfica",
    email: "pesbarbosa@gmail.com",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Prof. Robson Pequeno de Sousa",
    disciplina: "Computação Gráfica",
    email: "sousarob@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Profª. Sabrina de Figueiredo Souto",
    disciplina: "Computação Gráfica",
    email: "sabrinadfs@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Prof. Vladimir Costa de Alencar",
    disciplina: "Computação Gráfica",
    email: "valencar@servidor.uepb.edu.br",
    lattes: "https://lattes.cnpq.br/221133445",
    foto: prof2,
  },
  {
    nome: "Prof. Wellington Candeia de Araujo",
    disciplina: "Computação Gráfica",
    email: "wcandeia@servidor.uepb.edu.br",
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
                <p>
                  <br />
                  Email:
                  <b> {prof.email}</b>
                </p>
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
