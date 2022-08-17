import styled from "styled-components";

export const Nav = styled.nav`
    background: #162123;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0.5rem calc((100vw - 1000px) / 2); */
    padding: 200px;
    padding-bottom: 10px;
    padding-top: 10px;    
    z-index: 10; 
`

export const H1 = styled.h3`
    color: #9FA8AA;
    height: 35px;
    display: flex;
    align-items: center;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    


    
    &:hover {
        transition: 0.2s;
        /* color: #9FA8AA; */
        cursor: pointer;
        
        /* text-decoration: underline; */
        /* border-bottom: 1px solid black;
        padding-bottom: 5px; */

        border-bottom: solid 3px #d0d9db;  
        /* transform: scaleX(1);  */
}


`

export const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 293px;

    /* &:hover {
        transition: transform 0.7s;
        transform: scale(1.1);
    } */
`