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
      professor: "Profª. Magna",
      descricao:
        "A disciplina de Ética em Computação, no contexto da graduação em Ciência da Computação, trata das questões morais, sociais e legais relacionadas ao desenvolvimento e uso da tecnologia. O conteúdo aborda temas como privacidade de dados, segurança da informação, responsabilidade profissional, inteligência artificial ética e impactos sociais dos sistemas computacionais. A proposta é promover a análise crítica e o entendimento das implicações éticas nas decisões técnicas. São discutidos também códigos de conduta, legislações pertinentes e práticas recomendadas no exercício profissional. Essa formação contribui para a atuação ética e responsável no setor tecnológico.",
    },
    {
      nome: "Metodologia Científica (60H)",
      professor: "Prof. Dunfrey",
      descricao:
        "A disciplina de Metodologia Científica, inserida no curso de Ciência da Computação, tem como objetivo apresentar os fundamentos da produção do conhecimento científico. Seu conteúdo abrange conceitos essenciais como o método científico, estrutura de trabalhos acadêmicos, tipos de pesquisa, técnicas de coleta e análise de dados, além de normas de formatação. A proposta é capacitar os estudantes a desenvolverem projetos de pesquisa de forma sistemática, coerente e com embasamento teórico. Essa formação é fundamental para a elaboração de trabalhos acadêmicos e para o desenvolvimento de uma postura investigativa crítica e reflexiva.",
    },
    {
      nome: "Português Instrumental (30H)",
      professor: "(Departamento de Letras)",
      descricao:
        "A disciplina de Português Instrumental, no âmbito do curso de Ciência da Computação, tem como foco o desenvolvimento das habilidades de leitura, interpretação e produção textual voltadas para contextos acadêmicos e técnicos. O conteúdo inclui estratégias de compreensão de textos científicos, identificação de estruturas argumentativas, ampliação do vocabulário técnico e prática da escrita formal. Também são abordadas normas gramaticais relevantes e técnicas de coesão e coerência textual. A disciplina visa aprimorar a competência linguística dos estudantes, promovendo uma comunicação escrita clara, precisa e adequada às exigências da área.",
    },
    {
      nome: "Introdução à Computação (60H)",
      professor: "Prof. Heron",
      descricao:
        "A disciplina de Introdução à Computação, componente fundamental do curso de Ciência da Computação, apresenta os conceitos básicos da área, oferecendo uma visão geral sobre os fundamentos teóricos e práticos da computação. Abrange temas como a história da computação, arquitetura de computadores, sistemas operacionais, representação da informação, algoritmos e lógica de programação. Também são introduzidas noções sobre linguagens de programação e ambientes de desenvolvimento. O objetivo é proporcionar aos estudantes uma base sólida para o entendimento das disciplinas futuras, despertando o pensamento computacional e o interesse pela atuação profissional na área.",
    },
    {
      nome: "Lógica para Computação (60H)",
      professor: "Profª. Magna",
      descricao:
        "A disciplina de Lógica para Computação, integrante do curso de Ciência da Computação, aborda os fundamentos da lógica formal aplicados à resolução de problemas computacionais. Seu conteúdo inclui lógica proposicional e de predicados, tabelas verdade, equivalências lógicas, inferências, e métodos de demonstração. Também são exploradas aplicações da lógica na construção de algoritmos, análise de circuitos e especificação de programas. A proposta é desenvolver o raciocínio lógico e a capacidade de abstração, essenciais para a modelagem e resolução de problemas na área da computação. Essa base teórica sustenta diversas disciplinas técnicas ao longo da graduação.",
    },
    {
      nome: "Matemática Discreta I (60H)",
      professor: "Prof. Antônio Carlos",
      descricao:
        "A disciplina de Matemática Discreta I, essencial no curso de Ciência da Computação, oferece os fundamentos teóricos necessários para a modelagem e análise de problemas computacionais. Seu conteúdo engloba conjuntos, relações, funções, princípios de contagem, lógica matemática, técnicas de prova, e introdução à teoria dos grafos. A abordagem favorece o raciocínio abstrato e o pensamento sistemático, capacitando os estudantes a construir argumentos matemáticos rigorosos. Esses conceitos são amplamente aplicados em algoritmos, estruturas de dados e linguagens formais, servindo de base para diversas áreas da computação.",
    },
    {
      nome: "Algoritmos (60H)",
      professor: "Profª. Kézia",
      descricao:
        "A disciplina de Algoritmos, fundamental na formação em Ciência da Computação, introduz os princípios básicos da construção e análise de soluções computacionais por meio da lógica estruturada. Seu conteúdo abrange a concepção e implementação de algoritmos, estruturas de controle (sequência, seleção e repetição), subalgoritmos, variáveis, tipos de dados e técnicas de resolução de problemas. Também são explorados métodos de análise de eficiência e organização de código. Essa disciplina tem como objetivo desenvolver o pensamento computacional dos estudantes, preparando-os para desafios mais complexos em programação e engenharia de software.",
    },
  ],
  "2º período": [
    {
      nome: "Cálculo Diferencial e Integral I (60H)",
      professor: "(Departamento de Matemática)",
      descricao:
        "Introdução ao cálculo de funções de uma variável: limites, derivadas, aplicações de derivadas e início da integração.",
    },
    {
      nome: "Vetores e Geometria Analítica (60H)",
      professor: "(Departamento de Matemática)",
      descricao:
        "Estudo de vetores no plano e no espaço, retas, planos, cônicas e quadricas com aplicações em problemas geométricos.",
    },
    {
      nome: "Inglês Instrumental (30H)",
      professor: "(Departamento de Letras)",
      descricao:
        "Leitura e interpretação de textos técnicos em inglês com foco em vocabulário da área de computação.",
    },
    {
      nome: "Tecnologia, Ciências e Sociedade (30H)",
      professor: "Profª. Magna",
      descricao:
        "Reflexão crítica sobre os impactos sociais, culturais e éticos da ciência e tecnologia na sociedade contemporânea.",
    },
    {
      nome: "Matemática Discreta II (60H)",
      professor: "Prof. Antônio Carlos",
      descricao:
        "Continuação do estudo de estruturas discretas: árvores, grafos, recorrências, princípios de inclusão e exclusão.",
    },
    {
      nome: "Linguagem de Programação I (60H)",
      professor: "Prof. Fred Bublitz, Profª. Magna",
      descricao:
        "Introdução à programação estruturada com uso de linguagens como C ou Python. Variáveis, controle de fluxo e estruturas de dados básicas.",
    },
    {
      nome: "Laboratório de Programação I (60H)",
      professor: "Prof. Fred Bublitz, Profª. Magna",
      descricao:
        "Aplicação prática dos conceitos de programação em laboratório, com foco em exercícios de lógica e implementação de algoritmos.",
    },
  ],
  "3º período": [
    {
      nome: "Cálculo Diferencial e Integral II (60H)",
      professor: "(Departamento de Matemática)",
      descricao:
        "Estudo de integrais definidas e indefinidas, técnicas de integração, séries e aplicações em problemas físicos e geométricos.",
    },
    {
      nome: "Álgebra Linear (60H)",
      professor: "(Departamento de Matemática)",
      descricao:
        "Espaços vetoriais, matrizes, determinantes, sistemas lineares, autovalores e autovetores com aplicações em computação.",
    },
    {
      nome: "Organização e Arquitetura de Computadores (60H)",
      professor: "Prof. Misael Elias",
      descricao:
        "Estudo dos componentes internos dos computadores, conjuntos de instruções, registradores, memória e ciclos de execução.",
    },
    {
      nome: "Laboratório de Organização e Arquitetura de Computadores (30H)",
      professor: "Prof. Misael Elias",
      descricao:
        "Atividades práticas com simuladores e montagem de circuitos, reforçando os conceitos de arquitetura de processadores e memória.",
    },
    {
      nome: "Cálculo Numérico (60H)",
      professor: "Profª. Magna",
      descricao:
        "Técnicas de aproximação numérica, resolução de sistemas lineares, interpolação e métodos iterativos aplicados à computação.",
    },
    {
      nome: "Linguagem de Programação II (60H)",
      professor: "Prof. Janderson, Prof.  Daniel Marques",
      descricao:
        "Conceitos avançados de programação, como orientação a objetos, tratamento de exceções, arquivos e estruturas complexas de dados.",
    },
    {
      nome: "Laboratório de Programação II (60H)",
      professor: "Prof. Janderson, Prof. Daniel Marques",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
  ],
  "4º período": [
    {
      nome: "Probabilidade e Estatística I (60H)",
      professor: "(Departamento de Estatística)o",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Cálculo Diferencial e Integral III (60H)",
      professor: "(Departamento de Matemática)",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Estrutura de Dados",
      professor: "Prof. Janderson",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Laboratório de Estrutura de Dados (60H)",
      professor: "Prof. Fábio Luiz",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Análise e Projeto de Sistemas (60H)",
      professor: "Prof. Daniel Scherer",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Linguagens Formais e Teoria da Computação (60H)",
      professor: "Profª. Ana Luíza",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Tecnologia de Desenvolvimento de Interface Gráfica (60H)",
      professor: "Prof. Allan",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
  ],
  "5º período": [
    {
      nome: "Banco de Dados (60H)",
      professor: "Prof. Fábio Luiz",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Probabilidade e Estatística II (60H)",
      professor: "(Departamento de Estatística)",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Técnicas de Análise de Algoritmo (60H)",
      professor: "Prof. Fábio Luiz",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Redes de Computadores (60H)",
      professor: "Prof. Dunfrey",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Engenharia de Software I (60H)",
      professor: "Profª. Ana Isabella",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Paradigmas de Programação (60H)",
      professor: "Prof. Janderson",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Métodos Avançados de Programação (60H)",
      professor: "Prof. Sabrina",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
  ],
  "6º período": [
    {
      nome: "Engenharia de Software II (60H)",
      professor: "Prof. Sabrina",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Sistemas Operacionais (60H)",
      professor: "Prof. Dunfrey",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Computação Gráfica (60H)",
      professor: "Prof. Robson",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Gerência de Projetos (60H)",
      professor: "Prof. Ana Isabella",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Interconexão e Segurança de Redes de Computadores (60H)",
      professor: "Prof. Dunfrey",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Inteligência Artificial (60H)",
      professor: "Prof. Wellington",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
  ],
  "7º período": [
    {
      nome: "Programação Web (60H)",
      professor: "Prof. Allan",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Compiladores (60H)",
      professor: "Prof. Kézia",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Projeto de Interface Homem-Computador (60H)",
      professor: "Prof. Daniel Scherer",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Sistemas Multimídia (60H)",
      professor: "Prof. Daniel Marques",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Estágio Supervisionado I (240H)",
      professor: "Prof. Kátia",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "TCC I (60H)",
      professor: "",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Tópicos Especiais em Banco de Dados (60H)",
      professor: "Prof. Vladimir",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
  ],
  "8º período": [
    {
      nome: "Educação a Distância (60H)",
      professor: "Prof. Allan",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Computação de Alto Desempenho (60H)",
      professor: "Prof. Paulo Eduardo",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Tópicos Especiais em Inteligência Artificial (60H)",
      professor: "Prof. Robson",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Tópicos Especiais em Engenharia de Software (60H)",
      professor: "Prof. Ana Isabella",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Tópicos Especiais em Métodos Computacionais (60H)",
      professor: "Prof. Wellington",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Métodos Formais (60H)",
      professor: "Prof. Paulo Eduardo",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Estágio Supervisionado II (240H)",
      professor: "Prof. Kátia",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
    {
      nome: "Estágio Supervisionado Não Obrigatório (120H)",
      professor: "Prof. Antônio Carlos",
      descricao:
        "Práticas de codificação orientadas a objetos e desenvolvimento de pequenos projetos utilizando linguagens modernas.",
    },
  ],
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
