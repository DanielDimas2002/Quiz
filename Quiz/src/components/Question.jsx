import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (selectedOption) => {
    console.log(selectedOption);
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option: selectedOption }, 
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.pergunta}</h2>
      <div id="options-container">
        {currentQuestion.respostas.map((resposta, index) => (
          <Option
            key={index}
            resposta={resposta}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(resposta)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
