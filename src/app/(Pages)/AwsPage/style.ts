import styled from "styled-components";

export const Container = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        margin: 20px;
    }
`
export const SimulatesBox = styled.div` 
    border: 3px solid gray;
    min-height: 300px;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px lightgray;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    a{
        color: black;
        font-size: 20px;
        &:hover{
            color: yellow;
            text-shadow: 2px 2px 2px black;
        }
    }

    div{
        border: 1px solid black;
        padding: 10px 40px;
        border-radius: 20px;
    }
`