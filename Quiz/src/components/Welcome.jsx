// Importando o hook useContext para acessar o contexto global
import { useContext } from "react";
// Importando o contexto do Quiz para acessar e modificar o estado global
import { QuizContext } from "../context/quiz";
// Importando o arquivo de estilo para a página de boas-vindas
import "./Welcome.css";
// Importando a imagem para a tela inicial do quiz
import Quiz from "../img/quiz.svg";

const Welcome = () => {
  // Acessando o estado global e a função dispatch do contexto Quiz
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">  {/* Contêiner principal da tela de boas-vindas */}
      <h2>Seja bem-vindo</h2>  {/* Título da página de boas-vindas */}
      <p>Clique no botão abaixo para começar:</p>  {/* Instruções para o usuário */}
      <button 
        onClick={() => dispatch({ type: "CHANGE_STATE" })}  // Dispara a ação para mudar o estado do jogo
      >
        Iniciar
      </button>
      <img src={Quiz} alt="Inicio do Quiz" />  {/* Imagem para ilustrar o início do quiz */}
    </div>
  );
};

export default Welcome;
