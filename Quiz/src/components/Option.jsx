import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ resposta, selectOption }) => {
  const [quizState] = useContext(QuizContext);

  return (
    <div className="option" onClick={selectOption}>
      <p>{resposta}</p>
    </div>
  );
};

export default Option;
