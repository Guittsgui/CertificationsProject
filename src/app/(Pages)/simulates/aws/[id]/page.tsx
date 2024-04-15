"use client"
import { useRouter } from "next/navigation";
import * as s from './style'
import { allSimulates } from "@/app/(utils)/questions";
import { useState } from "react";

const MainPage = ({params}: any) => {
    
    const simulate = allSimulates[params.id]
    const [hasStarted, setHasStarted] = useState(false);

    return(

        <s.body>
            <s.initialContainer>
                <h2> Simulado {parseInt(params.id) + 1} </h2>
                <p> {simulate.length} Questões.</p>
                <button onClick={() => setHasStarted(!hasStarted)}> Iniciar </button>
            </s.initialContainer>
        </s.body>
    )
}


export default MainPage