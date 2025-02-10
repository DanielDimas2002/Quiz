// Importando o hook useContext para acessar o estado global do Quiz
import { useContext } from "react";
// Importando o contexto Quiz para acessar o estado global do quiz
import { QuizContext } from "../context/quiz";
// Importando a imagem que será exibida quando o jogo terminar
import GG from "../img/GameOver.svg";

// Importando o arquivo de estilo para o componente GameOver
import "./GameOver.css";

const GamerOver = () => {
  // Acessando o estado global do quiz usando o contexto
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      {/* Título exibido ao fim do jogo */}
      <h2>Fim de Jogo!</h2>
      
      {/* Exibindo a pontuação final do usuário */}
      <p>Pontuação: {quizState.score}</p>

      {/* Exibindo o número de respostas corretas comparado com o total de perguntas */}
      <p>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas.
      </p>

      {/* Imagem que será mostrada ao usuário no fim do jogo */}
      <img src={GG} alt="Fim do Quiz" />
      
      {/* Botão para reiniciar o jogo, que aciona o tipo de ação "NEW_GAME" */}
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>
        Reiniciar
      </button>
    </div>
  );
};

export default GamerOver;
