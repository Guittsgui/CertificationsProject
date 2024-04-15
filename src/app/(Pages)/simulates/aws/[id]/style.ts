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
    width: 650px;
    min-height: 600px;
    display: ${(props) => props.hasStarted === true ? "flex" : "none"};
    align-items: center;

    flex-direction: column;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 2px 2px 2px gray;
`

export const questionTitle = styled.header`
    height: 100px;
    width: 100%;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    p{
        border-bottom: 3px solid orange;
    }
`

export const questionFooter = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    height: 100px;
    gap: 50px;

    button{
        background-color: orange;
        border: none;
        border-radius: 20px;
        width: 200px;
        height: 40px;
        border: 1px solid black;
        font-size: 18px;
        &:hover{
            opacity: 70%;
        }
        &:disabled{
            background-color: darkgray;
            cursor: not-allowed;
            opacity: 100%;
        }

    }
`
export const question = styled.div`
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid black;
    span{
        font-size: 20px;
        font-weight: bolder;
        font-style: italic;
        margin-right: 15px;
    }
`

export const answers = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const questionBody = styled.div`
    min-height: 400px;
    border-bottom: 2px solid black;
    width: 100%;
`


