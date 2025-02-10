import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ resposta, answer, selectOption }) => {
  const [quizState] = useContext(QuizContext);

  return (
    <div
      className={`option 
        ${quizState.answerSelected && resposta === answer ? "correct" : ""}
        ${quizState.answerSelected && resposta !== answer ? "wrong" : ""}`
      }
      onClick={selectOption}
    >
      <p>{resposta}</p>
    </div>
  );
};

export default Option;
