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
export const SubTitleBox = styled.div`
    height: 160px;
    width: 100%;
    background-color: #232F3F;
    display: flex;
    div{
        flex: 1;
    }
    .leftSide{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
        color: white;
        gap: 10px;
        span{
            color: orange;
            font-weight: bolder;
            font-style: italic;
        }
        p{
            font-size: 18px;
        }
    }
    .rightSide{
        display: flex;
        align-items: center;
        justify-content: end;
        padding-right: 20px;
        
        a{
            color: white;
            font-size: 20px;
            border: 2px solid white;
            padding: 10px 40px;
            &:hover{
                color: orange;
                border-color: orange;
            }
        }
    }
`

export const InfosBox = styled.div` 
    min-height: 500px;
    width: 100%;

    h2{
        margin: 20px;
        font-size: 25px;
    }

    .bigBox{
        display: flex;
        padding: 20px;
        div{
            flex: 1;
        }
        .leftSide{
            font-size: 17px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            
            span{
                font-weight: bolder;
                font-size: 20px;
            }
        }

        .rightSide{
            p{
                font-size: 23px;
               
            }
            span{
                font-weight: bolder;
                font-style: italic;
            }
            .img{
                background-image: url(https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png);
                height: 300px;
                width: 300px;
                margin: 10px auto;

            }
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