import Navbar from "../components/Navbar";
import SocialBar from "../components/SocialBar";
import "./Estagio.css";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Estagio() {
  return (
    <>
      <SocialBar />
      <main>
        <div className="estagio-container">
          <h1>ESTÁGIO</h1>

          <section className="estagio-box">
            <h2>Estágio Supervisionado</h2>
            <p>
              <strong>Art. 66:</strong> O Estágio Supervisionado do Bacharelado
              constitui-se em um Componente Curricular estabelecido no PPC, que
              deve propiciar situações de integração da teoria à prática para
              formação de competências e habilidades próprias do fazer
              profissional.
            </p>
            <p>
              <strong>Art. 67:</strong> O estágio será desenvolvido na UEPB ou
              em instituições públicas e/ou privadas e demais setores, desde que
              apresentem condições estruturais e organizacionais compatíveis com
              a área de formação e estejam localizados, preferencialmente, na
              cidade sede do Curso ou cidades circunvizinhas..
            </p>
            <p>
              <strong>Art. 68:</strong> A Carga Horária do Estágio Obrigatório
              será definida no PPC, conforme as DCNs de cada Curso. A carga
              horária relativa ao estágio obrigatório poderá ser distribuída ao
              longo dos diferentes períodos ou ser cumprida de forma concentrada
              conforme orientação das DCNs do Curso.
            </p>
          </section>

          <section className="estagio-box">
            <h2>Convalidação de Estágio</h2>
            <p>
              <strong>Art. 69:</strong> A carga horária relativa ao estágio
              obrigatório poderá ser distribuída ao longo dos diferentes
              períodos ou ser cumprida de forma concentrada conforme orientação
              das DCNs do Curso.
            </p>
            <p>
              1º Para auferir os benefícios descritos no caput, o estagiário
              deverá, através de requerimento específico, instruído com a
              documentação comprobatória, solicitar a convalidação da carga
              horária de estágio junto ao Coordenador de Estágio do Curso.
            </p>
            <p>
              2º O estudante deverá apresentar relatório de atividades que será
              avaliado por seu orientador com emissão de um parecer.
            </p>
            <p>
              3º O requerimento juntamente com a documentação comprobatória,
              relatório de atividades e parecer do orientador serão analisados
              pelo Coordenador de Estágio do Curso, que encaminhará para
              homologação pela Coordenação Geral de Estágios– PROGRAD.
            </p>
            <p>
              <strong>Art. 70:</strong> Caso o pleito supracitado seja atendido,
              a documentação e pareceres deverão ser encaminhados à PROGRAD para
              fins de integralização das horas de convalidação de estágio.
            </p>
            <p>
              <strong>Art. 71:</strong> Não poderá haver duplicidade do uso das
              horas para fins de integralização em mais de um Componente
              Curricular.
            </p>
            <p>
              <strong>I – Procedimentos para Convalidação</strong>
              <br />
              <br />
              Na condição de <strong>EMPREGADO</strong>
            </p>
            <p>a) Cartão do CNPJ da Instituição;</p>
            <p>
              {" "}
              Na condição de <strong>AUTÔNOMO</strong> apresentar:
            </p>
            <p>
              a) Comprovante de registro na prefeitura;
              <br />
              b) Comprovante de recolhimento do Imposto sobre Serviços (ISS);
              <br />
              c) Carnê de contribuição ao INSS correspondente a um período igual
              ou superior a do Estágio Curricular Obrigatório previsto no PPC.
            </p>
            <p>
              <strong>II – Procedimentos para Formalização</strong>
              <br />
              <br />O estudante interessado em proceder a validação deverá:
              <br />
              <br />
              1. Verificar a aptidão ao Estágio Curricular Obrigatório conforme
              o PPC do curso de computação;
              <br />
              <br />
              2. Preencher o formulário de REQUERIMENTO com a solicitação de
              Convalidação (
              <a
                href="https://proreitorias.uepb.edu.br/prograd/requerimento/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://proreitorias.uepb.edu.br/prograd/requerimento/
              </a>
              );
              <br />
              <br />
              3. Anexar ao requerimento, os documentos necessários e o relatório
              das atividades desenvolvidas no formato de Relatório de Atividades
              de Estágio;
              <br />
              <br />
              4. Abrir processo no setor de protocolo solicitando a equiparação,
              endereçando tal processo a coordenação do curso ou a Coordenação
              Geral de Estágio na Prograd.
              <br />
              <br />
              5. Encaminhar o processo.
              <br />
              <br />A coordenação do Curso de Computação, por sua vez, apreciará
              cada caso e encaminhará para parecer da Coordenação de Estágio
              que, após emissão de parecer, encaminhará em trâmite para a
              Coordenação Geral de Estágio para realizar a formalização, quando
              houver parecer favorável ao estágio.
            </p>
          </section>

          <section className="estagio-box">
            <h2>Acompanhamento e Avaliação do Estágio</h2>
            <p>
              <strong>Art. 60:</strong> Para realizar ou convalidar atividades
              de estágio, o estudante deverá estar regularmente matriculado no
              Curso. Parágrafo único. O Coordenador de Estágio do Curso se
              responsabilizará por orientar os estudantes em relação aos
              procedimentos para matrícula, convalidação, acompanhamento e
              avaliação dos estágios.
            </p>
            <p>
              <strong>Art. 61:</strong> O estudante deverá elaborar o plano de
              atividades e reunir a documentação necessária para celebração do
              Termo de Compromisso entre a UEPB e a parte concedente,
              encaminhando os documentos para a Coordenação Geral de Estágios
              (PROGRAD), que tomará as providências necessárias.
              <br />
              <br />
              1º Nos casos em que a UEPB seja a própria concedente do estágio,
              será dispensado o Termo de Compromisso previsto no caput.
              <br />
              <br />
              2º No PPC do Curso, deverão estar descritos os procedimentos para
              indicação docentes da UEPB para atuarem como orientadores de
              estágio, assim como os modelos de interação conforme descrito na
              seção anterior.
              <br />
              <br />
              3º A formalização da relação de orientação entre docente da UEPB e
              estagiário ocorrerá por meio de uma carta de aceite de orientação.
              <br />
              <br />
              4º No plano de trabalho deve constar também uma descrição dos dias
              e horários em que ocorrerão as reuniões de orientação, se elas
              serão presenciais ou à distância, e como será feito o
              acompanhamento das atividades de estágio.
            </p>
            <p>
              <strong>Art. 62:</strong> É de responsabilidade da UEPB,
              representada pelo docente orientador ou coordenador de estágio,
              analisar e verificar se as atividades propostas pelo estagiário
              estão condizentes com a sua formação profissional.
            </p>
            <p>
              <strong>Art. 63:</strong> As ações do estágio deverão ser
              descritas em um relatório a ser avaliado por seu orientador.
              <br />
              <br />I – os relatórios deverão descrever as atividades de
              estágio, buscando estabelecer relação entre a teoria e a prática.
              <br />
              <br />
              II – os relatórios de estágios supervisionados poderão ser usados
              como base para elaboração de Trabalho de Conclusão de Curso (TCC).
              <br />
              <br />
              III – os arquivos eletrônicos dos relatórios finais serão
              recolhidos e arquivados pelos orientadores para fins de avaliação,
              sendo encaminhada uma cópia dos arquivos aos coordenadores de
              estágio para fins de registro.
              <br />
              <br />
              1º Uma amostra dos relatórios deve ser apreciada pelos NDEs e/ou
              por pareceristas “ad hoc” da PROGRAD a fim de avaliar a qualidade
              da produção para proposição de ações e políticas para sua
              melhoria.
              <br />
              <br />
              2º As formas de avaliação dos estágios supervisionados deverão
              constar no PCC do Curso.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
