// react
import { useState } from 'react';
import * as React from 'react';

// styles
import styles from './NavigationBar.module.css';
import styled from 'styled-components';

// images
import logo from '../../assets/logo/pklogo.png'

// react router dom
import { NavLink, Link } from 'react-router-dom'

// mui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const MuiDropDown = styled.div`
    
    Button{
        color: #d0d9db;
        border: 3px solid transparent;  
        height: 69px;
        border-radius: 30px;
        width: 200px;
        
        top: 5px;

        &:hover{
            border: 3px solid #d0d9db;  
            border-radius: 30px;
            transition: 0.2s;
            width: 200px;
        }
    }

    @media screen and (max-width: 880px){
        justify-content: center;
    }

`

const Nav = styled.nav`
    background: #162123;
    height: auto;

    @media all and (max-width: 880px) {
        display: grid;
        height: auto;
        padding: 0px;
        padding-bottom: 10px;
        margin: 0px;
    }
`

const H1 = styled.h3`
    justify-content: center;

    padding: 20px;

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

const LogoPik = styled.img`
    padding-top: 35px;
    width: 300px;
    margin: 0 auto;
    display: block;
    position: absolute;
    left: calc((100% - 15%) / 2);
    // z-index: 10;

    @media screen and (max-width: 880px){
        left: 0;
        // margin: 0;
        position: unset;
           
    }
`

const LangButton = styled.button`

    width: 3vw;
    height: 3vh;

    font-size: 1vw;

    background-color: #d0d9db;
    color: #162123;
    box-shadow: 0px 0px 5px 5px #162123;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
`

export const NavigationBar = () => {


    let activeStyle = {
        color: "#878787",
        borderColor: "green"
    };

    const [lang, setLang] = useState('BG');
    const changeLanguage = () => {
        if (lang === "BG") {
            setLang("EN");
        } else if (lang === "EN") {
            setLang("BG");
        }
    };

    //mui
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Nav>
                <div className={styles.main_menu}>
                    <LangButton onClick={changeLanguage}>{lang}</LangButton>

                    <Link to="/">
                        <LogoPik src={logo} />
                    </Link>

                    <div className={styles.inner_main_menu}>

                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <H1>Начало</H1>
                                </NavLink>
                            </li>

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

                            <li>
                                <NavLink
                                    to="authors"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <H1>Насоки за авторите</H1>
                                </NavLink>
                            </li>

                            <li>
                                {/* mui */}
                                <MuiDropDown>
                                    <Button
                                        style={{
                                            textTransform: 'none',
                                            // color: "#d0d9db",
                                            fontSize: '26px',
                                            padding: '0px',
                                            fontWeight: 'bold',
                                            fontFamily: ['Noto Serif HK', 'serif']

                                        }}
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        Още</Button>

                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >

                                        <Link to="/about">
                                            <MenuItem
                                                style={{
                                                    color: "black",
                                                }}
                                                onClick={handleClose}>За списанието</MenuItem>
                                        </Link>

                                        <Link to="/editorialboard">
                                            <MenuItem
                                                style={{
                                                    color: "black",
                                                }}
                                                onClick={handleClose}>Редакторски колектив</MenuItem>
                                        </Link>
                                    </Menu>
                                </MuiDropDown>
                                {/* mui */}

                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </>
    )
}

