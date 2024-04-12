"use client"
import Link from 'next/link'
import * as s from './style'
import { allSimulates } from '@/app/(utils)/questions'

const AwsPage = () => {

    return(
        <s.Container>
            <h2> AWS Page</h2>

            <s.SimulatesBox>
                {allSimulates.map((item, index) => (
                    <div className="singleSimulate">
                        <Link href={"/"} key={index}>
                            Simulado 0{index + 1}
                        </Link>
                        <p> {item.length} Questões.</p> 
                    </div>
                ))}
            </s.SimulatesBox>


        </s.Container>
    )
}

export default AwsPage