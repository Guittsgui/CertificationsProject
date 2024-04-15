import styled from "styled-components";

export const body = styled.div`
    min-height: 750px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const initialContainer = styled.div` 
    width: 650px;
    height: 600px;
    display: flex;
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

export const questionsContainer = styled.div`

`