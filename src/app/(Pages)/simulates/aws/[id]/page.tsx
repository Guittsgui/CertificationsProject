"use client"
import { useRouter } from "next/navigation";
import * as s from './style'
import { allSimulates } from "@/app/(utils)/questions";
import { useState } from "react";

const MainPage = ({params}: any) => {
    
    const simulate = allSimulates[params.id]
    const [hasStarted, setHasStarted] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentQuestion , setCurrentQuestion] = useState(0)

    function handlePreviusQuestion(){
        setShowAnswer(false)
        setCurrentQuestion(currentQuestion -1)

    }
    function handleNextQuestion(){
        setShowAnswer(false)
        setCurrentQuestion( currentQuestion + 1)
        
    }

    return(

        <s.body>
            <s.initialContainer hasStarted={hasStarted}>
                <h2> Simulado {parseInt(params.id) + 1} </h2>
                <p> {simulate.length} Questões.</p>
                <button onClick={() => setHasStarted(!hasStarted)}> Iniciar </button>
            </s.initialContainer>
            <s.questionsContainer hasStarted={hasStarted}>
                <s.questionsFields>
                   <s.title>
                        <h2>Questão {currentQuestion + 1} / {simulate.length} </h2>
                   </s.title>
                   <s.question>
                        <p> <span> Pergunta: </span> {simulate[currentQuestion].question} </p>
                        {simulate[currentQuestion].answers.map((item,index) => (
                            <p key={index}> {item} </p>
                        ))}

                   </s.question>
                   <s.footer>
                        <button 
                            onClick={handlePreviusQuestion}
                            disabled={currentQuestion === 0}>Anterior</button>
                        <button className="finnaly" onClick={() => setShowAnswer(!showAnswer)}>Mostrar Resposta</button>
                        <button 
                            onClick={handleNextQuestion}
                            disabled={currentQuestion === simulate.length - 1}> Próxima</button>
                        
                   </s.footer>
                   <s.rightAnswerr>
                        {showAnswer && <p> Resposta Correta: A, B.</p> }
                   </s.rightAnswerr>


                </s.questionsFields>
                <s.menuFields>
                    <h2> Questions: </h2> 

                    <div className="allQuestionsBox">
                        {simulate.map((item,index) => (
                            <div className="singleQuestionCircle" 
                                key={index}
                                onClick={()=> setCurrentQuestion(index) }>
                                <p> {index + 1} </p>
                            </div>
                        ))}
                    </div>
                </s.menuFields>
            </s.questionsContainer> 
           

        </s.body>
    )
}


export default MainPage