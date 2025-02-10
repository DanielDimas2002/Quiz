// Importando hooks e contextos necessários
import { useContext, useEffect } from 'react'
// Importando o contexto do Quiz, onde o estado global do quiz é armazenado
import { QuizContext } from './context/quiz'

// Importando os componentes da aplicação
import Welcome from './components/Welcome'  // Tela de boas-vindas
import Question from './components/Question'  // Tela de perguntas
import GameOver from './components/GameOver'  // Tela de fim de jogo

// Importando os estilos específicos para a aplicação
import './App.css'

function App() {
  // Utilizando o contexto do Quiz para acessar o estado global e a função de despachar ações
  const [quizState, dispatch] = useContext(QuizContext);

  // Usando useEffect para disparar uma ação de reordenação das perguntas assim que o componente for montado
  useEffect(() => {
    // Reordenando as perguntas para que a ordem seja aleatória no início do jogo
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])  // O array vazio [] garante que a ação seja disparada apenas uma vez após a primeira renderização

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {/* Condicional para exibir a tela de boas-vindas caso o estado do jogo seja "Start" */}
      {quizState.gameStage === "Start" && <Welcome/>}
      {/* Condicional para exibir a tela de perguntas caso o estado do jogo seja "Playing" */}
      {quizState.gameStage === "Playing" && <Question/>}
      {/* Condicional para exibir a tela de fim de jogo caso o estado do jogo seja "End" */}
      {quizState.gameStage === "End" && <GameOver/>}
   </div>
  )
}

export default App;
