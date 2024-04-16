import styled from "styled-components";

type props = {
    hasStarted: boolean;
}

export const body = styled.div`
    min-height: 750px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const initialContainer = styled.div<props>` 
    width: 650px;
    height: 600px;
    display: ${(props) => props.hasStarted === true ? "none" : "flex"};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 2px 2px 2px gray;
    gap: 20px;

    h2{
        font-size: 35px;
        border-bottom: 4px solid orange;
        padding-bottom: 5px;
    }

    p{
        font-size: 25px;
    }

    button{
        width: 300px;
        height: 40px;
        border-radius: 20px;
        border: none;
        font-size: 20px;
        border: 2px solid orange;
        &:hover{
            opacity: 70%;
        }
    }
`

export const questionsContainer = styled.div<props>`
    width: 800px;
    min-height: 600px;
    display: ${(props) => props.hasStarted === true ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 2px 2px 2px gray;
`

export const questionsFields = styled.div`
    flex: 3;
    min-height: 600px;
    width: 100%;
    border-right: 3px solid black;

`

export const title = styled.header`
    width: 100%;
    border-bottom: 1px solid black;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        border-bottom: 2px solid orange;
        padding-bottom: 2px;
        color: darkblue;
    }
`

export const question = styled.div`
    padding: 20px;
    min-height: 360px;
    span{
        font-weight: bolder;
        margin-right: 20px;
        font-style: italic;
    }

    p{
        margin-bottom: 25px;
    }
`

export const footer = styled.footer`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background-color: #232F3F;

    button{
        width: 150px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid black;
        background-color: orange;
        &:hover{
            opacity: 70%;
        }
        
        &:disabled{
            background-color: gray;
            cursor: not-allowed;
            opacity: 100%;
        }

    }

    .finnaly{
        background-color: bisque;
    }
`

export const rightAnswerr = styled.div` 
    height: 50px ;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    color: green;
    p{
        border-bottom: 2px solid green;
        padding: 5px;
    }
`




export const menuFields = styled.nav`
    flex: 1;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin: 10px 0;
        border-bottom: 2px solid orange;
        color: darkblue;
    }

    .allQuestionsBox{
        width: 180px;
        min-height: 300px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px; 

        .singleQuestionCircle{
            height: 35px;
            width: 35px;
            border: 2px solid orange;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &:hover{
                opacity: 70%;
                font-weight: bolder;

                p{
                    border-bottom: 1px solid black;
                }
            }
            
        }
    }
`


