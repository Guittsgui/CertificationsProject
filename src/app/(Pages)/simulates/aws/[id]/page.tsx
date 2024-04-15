"use client"
import { useRouter } from "next/navigation";
import * as s from './style'
import { allSimulates } from "@/app/(utils)/questions";
import { useState } from "react";

const MainPage = ({params}: any) => {
    
    const simulate = allSimulates[params.id]
    const [hasStarted, setHasStarted] = useState(false);
    const [currentQuestion , setCurrentQuestion] = useState(0)

    return(

        <s.body>
            <s.initialContainer hasStarted={hasStarted}>
                <h2> Simulado {parseInt(params.id) + 1} </h2>
                <p> {simulate.length} Questões.</p>
                <button onClick={() => setHasStarted(!hasStarted)}> Iniciar </button>
            </s.initialContainer>
            <s.questionsContainer hasStarted={hasStarted}>
                <s.questionTitle>
                    <p> Questão {currentQuestion + 1}/ {simulate.length}</p>
                </s.questionTitle>
                <s.questionBody>
                    <s.question>
                         <p> <span>Pergunta: </span>{simulate[currentQuestion].question} </p>
                    </s.question>
                    <s.answers>
                        {simulate[currentQuestion].answers.map((item, index) => (
                            <p key={index}> {item} </p>
                        ))}
                    </s.answers>
                </s.questionBody>
                <s.questionFooter>
                    <button 
                        disabled={currentQuestion === 0}
                        onClick={() => setCurrentQuestion(currentQuestion - 1)}> 
                            Anterior 
                    </button>
                    <button 
                        disabled ={currentQuestion === simulate.length - 1}
                        onClick={() => setCurrentQuestion(currentQuestion + 1)}> 
                            Próxima 
                    </button>
                </s.questionFooter>
            </s.questionsContainer>

        </s.body>
    )
}


export default MainPage