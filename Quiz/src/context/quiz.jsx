// Importando hooks e funções necessários
import { createContext, useReducer } from "react";
// Importando as questões que serão utilizadas no quiz
import questions from "../data/questions";

// Definindo os estágios possíveis do jogo
const STAGES = ["Start", "Playing", "End"];

// Definindo o estado inicial do quiz
const initialState = {
  gameStage: STAGES[0],  // Estágio inicial do jogo
  questions,  // Questões do quiz
  currentQuestion: 0,  // Índice da pergunta atual
  score: 0,  // Pontuação do jogador
  answerSelected: false,  // Indica se uma resposta foi selecionada
};

// Função reducer para atualizar o estado conforme as ações disparadas
const quizReducer = (state, action) => {
  switch (action.type) {
    // Ação para mudar o estado do jogo (iniciar jogo)
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],  // Muda para o estágio "Playing"
      };

    // Ação para reordenar as perguntas aleatoriamente
    case "REORDER_QUESTIONS":
      const reorderedQuestions = [...questions].sort(() => Math.random() - 0.5);
      return {
        ...state,
        questions: reorderedQuestions,  // Atualiza as perguntas reordenadas
      };

    // Ação para mudar para a próxima pergunta
    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      // Se não houver próxima pergunta, o jogo termina
      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,  // Avança para a próxima pergunta
        gameStage: endGame ? STAGES[2] : state.gameStage,  // Se o jogo terminou, muda para o estágio "End"
        answerSelected: false,  // Reseta a seleção de resposta
      };

    // Ação para reiniciar o jogo, voltando ao estado inicial
    case "NEW_GAME":
      return initialState;

    // Ação para verificar a resposta do jogador
    case "CHECK_ANSWER":
      if (state.answerSelected) return state;  // Se a resposta já foi selecionada, não faz nada

      const { answer, option } = action.payload;  // Desestruturando a ação para obter a resposta correta e a opção escolhida
      const correctAnswer = answer === option ? 1 : 0;  // Verificando se a opção escolhida é a correta

      return {
        ...state,
        score: state.score + correctAnswer,  // Atualiza a pontuação
        answerSelected: option,  // Marca a resposta selecionada
      };

    // Caso a ação não seja reconhecida, retorna o estado atual
    default:
      return state;
  }
};

// Criando o contexto para o Quiz, onde o estado será compartilhado entre os componentes
export const QuizContext = createContext();

// Componente provider que vai envolver a aplicação, fornecendo o estado global do quiz
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);  // Usando useReducer para gerenciar o estado do quiz

  return (
    <QuizContext.Provider value={value}>  {/* Fornecendo o valor do estado e a função dispatch para os componentes filhos */}
      {children}
    </QuizContext.Provider>
  );
};
