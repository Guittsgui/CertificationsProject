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

            <s.SubTitleBox>
                <div className="leftSide">
                    <span>AWS CLOUD PRACTIONER ESSENTIALS</span>
                    <h3> Material AWS Gratuito em Português</h3>
                    <p> Aqui voce encontra material escrito, resumos quizzes e dicas.</p>
                </div>
                <div className="rightSide">
                    <a href="#study">Veja Mais</a>
                </div>
            </s.SubTitleBox>

            <s.InfosBox>
                <h2> Visão geral do exame:</h2>

                <div className="bigBox">
                    <div className="leftSide">
                        <div className="infos">
                            <p><span>Categoria: </span> Básico</p>
                            <p><span>Duração do exame: </span> 90 Minutos </p>
                            <p><span>Formato do Exame: </span> 65 questões; múltipla escolha ou múltipla resposta</p>
                            <p><span>Custo: </span> 100 USD. Visite os Preços do exame para obter informações adicionais sobre custos, incluindo taxas de câmbio</p>
                            <p><span>Teste presencial ou on-line: </span> Centro de testes da Pearson VUE ou exame on-line monitorado</p>
                            <p><span>Idiomas oferecidos: </span> Inglês, japonês, coreano, chinês simplificado, chinês tradicional, bahasa (Indonésia), espanhol (Espanha), espanhol (América Latina), francês (França), alemão, italiano e português (Brasil)</p>
                        </div>
                    </div>
                    <div className="rightSide">
                        <p>O <span>AWS Certified Cloud Practitioner</span> valida a compreensão básica e de alto nível dos serviços, da terminologia e da Nuvem AWS.  Esse é um bom ponto de partida na jornada de certificação da AWS para indivíduos sem experiência anterior em TI ou nuvem que estão migrando para uma carreira na nuvem ou para funcionários da linha de negócios que buscam conhecimento básico sobre a nuvem.</p>
                        <div className="img">
                        </div>
                    </div>
                </div>
            </s.InfosBox>
            <s.contentBanner id="study">
                <h2> Seu guia de Estudo Completo: </h2>
                <div className="infos">
                    <div className="resume">
                        <h3>Material Completo:</h3>
                        <p> Material inicial para leitura e compreensão do conteúdo da prova.</p>
                        <button> Ver Mais</button>
                    </div>
                    <div className="resume">
                        <h3>Resumo Completo:</h3>
                        <p> Material para quem já leu o completo, baseado em palavras chaves.</p>
                        <button> Ver Mais</button>
                    </div>
                </div>
            </s.contentBanner>
            <s.SimulatesBox>
                <h2> Simulados + 300 Questões: </h2>
                <div className="linkBox">
                    {allSimulates.map((item,index) => (
                        <Link href={`/simulates/aws/${index}`} key="index"> Simulado 0{index + 1} </Link>
                    ))}
                </div>
            </s.SimulatesBox>
                        
        </s.Container>
    )
}

export default AwsPage