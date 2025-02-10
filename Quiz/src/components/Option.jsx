// Importando o hook useContext para acessar o estado global do Quiz
import { useContext } from "react";
// Importando o contexto Quiz para acessar o estado e as funções globais
import { QuizContext } from "../context/quiz";

// Importando o arquivo de estilo para o componente Option
import "./Option.css";

const Option = ({ resposta, answer, selectOption }) => {
  // Acessando o estado global do quiz
  const [quizState] = useContext(QuizContext);

  return (
    <div
      // Definindo as classes CSS para o componente de opção
      className={`option 
        ${quizState.answerSelected && resposta === answer ? "correct" : ""}  // Se a resposta estiver correta, adiciona a classe 'correct'
        ${quizState.answerSelected && resposta !== answer ? "wrong" : ""}    // Se a resposta estiver errada, adiciona a classe 'wrong'
      `}
      // Dispara a função selectOption quando a opção for clicada
      onClick={selectOption}
    >
      <p>{resposta}</p> {/* Exibe o texto da resposta */}
    </div>
  );
};

export default Option;
