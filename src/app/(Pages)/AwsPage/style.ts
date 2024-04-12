import styled from "styled-components";

export const Container = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleBox = styled.div`
    height: 250px;
    width: 100%;
    background: rgb(237,251,63);
    background: radial-gradient(circle, rgba(237,251,63,1) 0%, rgba(252,161,70,1) 100%);    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    gap: 10px;
    h2{
        font-size: 32px;
        color: white;
        text-shadow: 2px 2px 2px black;
    }
    p{
        font-size: 20px;
    }
    button{
        width: 280px;
        height: 40px;
        border-radius: 30px;
        border: none;
        margin-top: 20px;
        background-color: white;
        border: 2px solid blue;
        &:hover{
            border-color: black;
        }
        a{
            color: blue;
        }
    }
    .bt{
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .orange{
        background-color: orange;
        font-weight: bolder;
        border: 1px solid gray;
        a{
            color: black;
        }
        &:hover{
            background-color: darkorange;
        }
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