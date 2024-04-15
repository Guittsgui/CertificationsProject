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
        height: 450px;
        width: 100%;
        display: flex;


        .leftSide{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            .infos{
                height: 400px;
                width: 500px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 10px;
                padding: 10px;
                span{
                    font-weight: bolder;
                    margin-right: 10px;
                    font-size: 17px;
                }
            }
        }   
        .rightSide{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            p{
                font-size: 18px;
            }
            .img{
                height: 300px;
                width: 300px;
                background-image: url(https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png);
            }
        }
    }

`
export const contentBanner = styled.div`
    height: 500px;
    width: 100%;
    background-color: #232F3F;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;

    h2{
        font-size: 35px;
        border-bottom: 2px solid orange;
        padding: 5px;
    }

    .infos{
        display: flex;
        gap: 50px;
    }

    .resume{
        border: 1px solid white;
        height: 250px;
        width: 300px;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;     
        h3{      
            font-size: 24px;
            color: orange;
            border-bottom: 1px solid white;
            padding-bottom: 5px;
        }

        button{
            height: 40px;
            width: 150px;
            border-radius: 20px;
            border: none;
            background-color: orange;

            &:hover{
                background-color: rgb(255, 196, 87);
                color: white;
            }
        }
    }


`

export const SimulatesBox = styled.div` 
   
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .linkBox{
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 30px;
        }



    h2{
        color: rgb(19, 19, 83);
        border-bottom: 3px solid orange;
        font-size: 35px;
        margin: 30px;
        padding-bottom: 5px;
    }

    a{
        border: 2px solid orange;
        padding: 20px 40px;
        color: black;
        font-size: 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 2px lightgray;

        &:hover{
            color: gray;
            font-style: underline;
            border: 2px solid rgb(255, 196, 87);
        }
    }

  
`

//background-image: url(https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png);