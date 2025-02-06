import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import GG from "../img/GameOver.svg"

import "./GameOver.css"

const GamerOver = () =>{
    return(
        <div id="gameover">
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: x</p>
            <p>Você acertou y de z perguntas.</p>
            <img src={GG} alt="Fim do Quiz"/>
            <button>Reiniciar</button>
        </div>
    )
}

export default GamerOver