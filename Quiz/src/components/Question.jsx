// Importando o hook useContext para acessar o contexto global
import { useContext } from "react";
// Importando o contexto do Quiz para acessar e modificar o estado global
import { QuizContext } from "../context/quiz";
// Importando o componente Option para renderizar as opções de respostas
import Option from "./Option";

// Importando o arquivo de estilo do componente de questão
import "./Question.css";

const Question = () => {
  // Acessando o estado global e a função dispatch do contexto Quiz
  const [quizState, dispatch] = useContext(QuizContext);

  // Pegando a questão atual com base no índice currentQuestion
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  // Função que será chamada quando uma opção de resposta for selecionada
  const onSelectOption = (selectedOption) => {
    console.log(selectedOption);  // Apenas para depuração, imprime a opção selecionada

    // Dispara a ação para verificar se a resposta está correta
    dispatch({
      type: "CHECK_ANSWER",  // Tipo de ação para verificar a resposta
      payload: { 
        answer: currentQuestion.answer,  // Resposta correta da questão
        option: selectedOption,  // Opção selecionada pelo usuário
      },
    });
  };

  return (
    <div id="question"> {/* Contêiner principal da questão */}
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.pergunta}</h2> {/* Exibe a pergunta atual */}
      
      <div id="options-container"> {/* Contêiner das opções de resposta */}
        {currentQuestion.respostas.map((resposta, index) => (
          <Option
            key={index}  // Usando o índice como chave única para cada opção
            resposta={resposta}  // Passando a resposta para o componente Option
            answer={currentQuestion.answer}  // Passando a resposta correta para o componente Option
            selectOption={() => onSelectOption(resposta)}  // Passando a função de seleção de opção
          />
        ))}
      </div>
      
      {/* Exibe o botão "Continuar" somente após uma resposta ser selecionada */}
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
