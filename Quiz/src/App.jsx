import { useContext } from 'react'
import Welcome from './components/Welcome'
import Question from './components/Question'
import './App.css'
import { QuizContext } from './context/quiz'


function App() {


  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className = "App">
      <h1>Quiz de Programação</h1>
      {quizState.gameState == "Start" && <Welcome/>}
      {quizState.gameState == "Playing" && <Question/>}
   </div>
  )
}

export default App
