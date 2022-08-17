import styled from "styled-components";

export const Image = styled.img`
            width: 100%;
            max-height: 90vh;
            /* margin: auto; */
            /* display: grid; */
            /* height: 100%; */
`

export const Logo = styled.img`
        position: absolute;
        top: 40%;
        left: 50%;
        width: auto;
        transform: translate(-50%, -50%);
        
`

export const Paragraph = styled.p`
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 17px;
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
`