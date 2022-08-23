import styled from "styled-components";
import img from '../../../assets/Feature-Images/pk1.png'

export const Image = styled.img`
            width: 100%;
            max-height: 90vh;
`

export const Logo = styled.img`
        position: absolute;
        top: 40%;
        left: 50%;
        width: auto;
        transform: translate(-50%, -50%);
        
        @media all and (max-width: 880px){
                width: 0px;
        }
`

export const Paragraph = styled.p`
        position: absolute;
        text-align: center;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 17px;

        @media all and (max-width: 880px){
                position: absolute;
                font-size: 13px;
                width: 90%;
                top: 85%;
        }
`

export const Button = styled.button`
        position: absolute;
        top: 90%;
        left: 50%;
        width: 40%;
        transform: translate(-50%, -50%);
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
                top: 105vh;
        }
`

export const Wrapper = styled.div`
        background-image: url(${img});
`