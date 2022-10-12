
// styles
import styles from './NavigationBar.module.css';
import styled from 'styled-components';

// images
import logo from '../../assets/logo/pklogo.png'

// react router dom
import { NavLink, Link } from 'react-router-dom'



export const Nav = styled.nav`
    background: #162123;
    height: atuo;

    padding-bottom: 100px;

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


export const NavigationBar = () => {


    let activeStyle = {
        color: "#878787",
        borderColor: "green"
    };



    return (
        <>
            <Nav>
                <div id="main_menu">
                    <div className={styles.inner_main_menu}>
                        <ul>
                            <li>
                                <NavLink
                                    to="archive"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <H1>Архив</H1>
                                </NavLink>
                            </li>
                            <li>two</li>
                            <li>three</li>
                            <li>four</li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </>
    )
}
