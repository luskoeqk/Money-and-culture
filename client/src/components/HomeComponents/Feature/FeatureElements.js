import styled from "styled-components";
import img from '../../../assets/Feature-Images/pk1.png'


export const Image = styled.img`
        width: 100%;
        max-height: 90vh;
`


export const Wrapper = styled.div`
        background-image: url(${img});

        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;


        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 150px 0px 150px 0px;
`


export const Paragraph = styled.p`

        text-align: center;
        color: white;
        font-size: 27px;

        width: 50%;

        @media all and (max-width: 880px){

                font-size: 13px;
                width: 90%;
                top: 80vh;
        }
`


export const Logo = styled.img`

        width: auto;
        
        @media all and (max-width: 880px){
                width: 80vw;
        }
`

export const Button = styled.button`
       
        width: 30vw;
       
        color: black;
        font-size: 30px;
        padding: 5px;
        border-radius: 30px;
        cursor: pointer;
        background-color: #F5F5F5;

        &:hover {
            background-color: #F8F8FF;
        }

        
        @media all and (max-width: 880px){
                font-size: 10px;
                top: 90vh;
        }
`