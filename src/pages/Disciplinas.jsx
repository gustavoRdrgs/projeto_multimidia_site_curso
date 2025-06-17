import Navbar from "../components/Navbar";
import SocialBar from "../components/SocialBar";
import DisciplinaCard from "../components/DisciplinaCard";
import fluxograma from "../assets/fluxograma.jpg";
import { useState } from "react";
import "./Disciplinas.css";

const disciplinasPorPeriodo = {
  "1º período": [
    {
      nome: "Ética em computação (30H)",
      professor: "Prof. Exemplo",
      descricao:
        "Aborda os fundamentos éticos e profissionais na área de computação, com foco em responsabilidade social e legalidade no desenvolvimento de software.",
    },
    {
      nome: "Metodologia Científica (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Introdução aos métodos científicos de pesquisa, estruturação de projetos acadêmicos e produção de artigos e trabalhos técnicos.",
    },
    {
      nome: "Português Instrumental (30H)",
      professor: "Prof. Exemplo",
      descricao:
        "Desenvolvimento da leitura e produção de textos técnicos e acadêmicos com foco em clareza, coerência e coesão textual.",
    },
    {
      nome: "Introdução à Computação (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Apresenta conceitos básicos de informática, funcionamento de computadores, sistemas operacionais e ferramentas de produtividade.",
    },
    {
      nome: "Lógica para Computação (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Estudo da lógica proposicional e de predicados aplicada à computação, raciocínio lógico e resolução de problemas.",
    },
    {
      nome: "Matemática Discreta I (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Conceitos de conjuntos, relações, funções, princípios de contagem, lógica matemática e estruturas algébricas básicas.",
    },
    {
      nome: "Algoritmos (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Fundamentos de algoritmos, fluxogramas, pseudocódigo e desenvolvimento de soluções computacionais eficientes.",
    },
  ],
  "2º período": [
    {
      nome: "Cálculo Diferencial e Integral I (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Introdução ao cálculo de funções de uma variável: limites, derivadas, aplicações de derivadas e início da integração.",
    },
    {
      nome: "Vetores e Geometria Analítica (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Estudo de vetores no plano e no espaço, retas, planos, cônicas e quadricas com aplicações em problemas geométricos.",
    },
    {
      nome: "Inglês Instrumental (30H)",
      professor: "Prof. Exemplo",
      descricao:
        "Leitura e interpretação de textos técnicos em inglês com foco em vocabulário da área de computação.",
    },
    {
      nome: "Tecnologia, Ciência e Sociedade (30H)",
      professor: "Prof. Exemplo",
      descricao:
        "Reflexão crítica sobre os impactos sociais, culturais e éticos da ciência e tecnologia na sociedade contemporânea.",
    },
    {
      nome: "Matemática Discreta II (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Continuação do estudo de estruturas discretas: árvores, grafos, recorrências, princípios de inclusão e exclusão.",
    },
    {
      nome: "Linguagem de Programação I (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Introdução à programação estruturada com uso de linguagens como C ou Python. Variáveis, controle de fluxo e estruturas de dados básicas.",
    },
    {
      nome: "Laboratório de Programação I (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Aplicação prática dos conceitos de programação em laboratório, com foco em exercícios de lógica e implementação de algoritmos.",
    },
  ],
  "3º período": [
    {
      nome: "Cálculo Diferencial e Integral II (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Estudo de integrais definidas e indefinidas, técnicas de integração, séries e aplicações em problemas físicos e geométricos.",
    },
    {
      nome: "Álgebra Linear (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Espaços vetoriais, matrizes, determinantes, sistemas lineares, autovalores e autovetores com aplicações em computação.",
    },
    {
      nome: "Organização e Arquitetura de Computadores (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Estudo dos componentes internos dos computadores, conjuntos de instruções, registradores, memória e ciclos de execução.",
    },
    {
      nome: "Laboratório de Organização e Arquitetura de Computadores (30H)",
      professor: "Prof. Exemplo",
      descricao:
        "Atividades práticas com simuladores e montagem de circuitos, reforçando os conceitos de arquitetura de processadores e memória.",
    },
    {
      nome: "Cálculo Numérico (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Técnicas de aproximação numérica, resolução de sistemas lineares, interpolação e métodos iterativos aplicados à computação.",
    },
    {
      nome: "Linguagem de Programação II (60H)",
      professor: "Prof. Exemplo",
      descricao:
        "Conceitos avançados de programação, como orientação a objetos, tratamento de exceções, arquivos e estruturas complexas de dados.",
    },
    {
      nome: "Laboratório de Programação II (30H)",
      professor: "Prof. Exemplo",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
  ],
  "4º período": [],
  "5º período": [],
  "6º período": [],
  "7º período": [],
  "8º período": [],
};

export default function Disciplinas() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState("1º período");

  return (
    <>
      <SocialBar />
      <main>
        <div className="disciplinas-container">
          <div className="disciplinas-header">
            <h2>Disciplinas</h2>
            <select
              value={periodoSelecionado}
              onChange={(e) => setPeriodoSelecionado(e.target.value)}
            >
              {Object.keys(disciplinasPorPeriodo).map((periodo) => (
                <option key={periodo} value={periodo}>
                  {periodo}
                </option>
              ))}
            </select>
          </div>

          <div className="disciplinas-lista">
            {disciplinasPorPeriodo[periodoSelecionado].map(
              (disciplina, index) => (
                <DisciplinaCard
                  key={index}
                  nome={disciplina.nome}
                  professor={disciplina.professor}
                  descricao={disciplina.descricao}
                />
              )
            )}
          </div>
        </div>
        <div className="fluxograma-container">
          <img
            src={fluxograma}
            alt="Fluxograma do curso"
            className="fluxograma-img"
          />
        </div>
      </main>
    </>
  );
}
