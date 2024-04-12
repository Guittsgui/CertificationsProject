"use client"
import Link from 'next/link'
import * as s from './style'
import { allSimulates } from '@/app/(utils)/questions'

const AwsPage = () => {

    return(
        <s.Container>
            <s.TitleBox>
                <h2> AWS Certified Cloud Practioner (CLF-C02)</h2>
                <p> Saiba mais sobre esta Certificação e os recursos da AWS que podem ajuda-lo a se preparar.</p>
                <div className="bt">
                    <button className='orange'> 
                        <a href="https://www.aws.training/certification/?cta=cptopbanner" target='_blank'>Agende um exame</a>
                    </button>
                    <button> <a href="" target='_blank'>Prepare-se para o exame</a></button>
                </div>
            </s.TitleBox>

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