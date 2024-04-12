import styled from "styled-components";

export const Footer = styled.footer`
    height: 300px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .center{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        small{
            font-size: 12px;
            font-style: italic;
        }
        p{
            font-size: 18px;
            letter-spacing: 2px;
        }
        .logos{
            display: flex;
            gap: 40px;
        }
    }
`