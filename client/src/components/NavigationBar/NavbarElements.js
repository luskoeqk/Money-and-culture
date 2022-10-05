import styled from "styled-components";


export const Nav = styled.nav`
    background: #162123;
    height: atuo;
    display: flex;


    align-items: center;
    justify-content: center;

    @media all and (max-width: 880px) {
        display: grid;
        height: auto;
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
    // display: block;
    // margin-left: auto;
    // margin-right: auto;
    // width: 293px;
    // padding-left: 20px;
    // padding-right: 20px;

    display: block;
    width: 293px;
    margin: auto;
    padding: 30px;

    @media all and (max-width: 700px) {
        max-width: 200px;
        width: auto;
    }
`


export const MuiDropDown = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 9px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 15px;

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