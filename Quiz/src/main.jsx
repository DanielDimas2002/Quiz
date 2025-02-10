// Importando o StrictMode do React para ajudar a identificar problemas no código durante o desenvolvimento
import { StrictMode } from 'react'
// Importando o método createRoot para renderizar a aplicação no DOM
import { createRoot } from 'react-dom/client'
// Importando os estilos globais para o projeto
import './index.css'
// Importando o componente principal da aplicação
import App from './App.jsx'
// Importando o provedor de contexto para o quiz, que vai disponibilizar o estado do quiz para os componentes
import { QuizProvider } from './context/quiz.jsx'

// Renderizando o componente React no DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolvendo a aplicação com o QuizProvider para permitir o acesso ao estado do quiz em qualquer componente */}
    <QuizProvider>
      {/* Componente principal da aplicação */}
      <App/>
    </QuizProvider>
  </StrictMode>,
)
