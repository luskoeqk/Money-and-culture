import styled from "styled-components";

export const Nav = styled.nav`
    background: #162123;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0.5rem calc((100vw - 1000px) / 2); */
    padding: 200px;
    margin: 0 auto;
    width: auto;
    padding-left: 250px;
    padding-bottom: 10px;
    padding-top: 10px;    
    z-index: 10; 

    @media all and (max-width: 880px) {
        display: grid;
        /* grid-template-rows: repeat(5, 1fr); */
        height: 500px;
        padding: 0px;
        margin: 0px;
    }
`

export const H1 = styled.h3`
    /* color: #9FA8AA; */
    height: 35px;
    display: flex;
    align-items: center;
    padding: 9px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid transparent;
    border-radius: 15px;
    
    &:hover {
        transition: 0.25s;
        border: 3px solid #d0d9db;  
        border-radius: 30px;
    }

    @media screen and (max-width: 880px){
        justify-content: center;

        &:hover{
            border: 3px solid transparent;  
        }
    }

`

export const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 293px;
    padding-left: 20px;
    padding-right: 20px;

    /* &:hover {
        transition: transform 0.7s;
        transform: scale(1.1);
    } */

    @media all and (max-width: 700px) {
        max-width: 200px;
        width: auto;
    }
`