import { useContext } from "react"
import {QuizContext} from "../context/quiz"

import "./Option.css"

const Option = ({respostas}) => {
    const [quizState, dispatch] = useContext(QuizContext)

    return(
        <div>
            <p>{respostas}</p>
        </div>
    )
}; 

export default Option