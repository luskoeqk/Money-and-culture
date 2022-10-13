// react
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
        width: 120px;
        height: 65px;
        border-radius: 15px;
        top: -5px;

        &:hover{
            transition: 0.25s;
            border: 3px solid #d0d9db;   
            border-radius: 30px;

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
        margin: 0px;
    }
`

const H1 = styled.h3`
justify-content: center;

    padding: 15px;

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
    width: 400px;
    max-width: 400px;
`


export const NavigationBar = () => {


    let activeStyle = {
        color: "#878787",
        borderColor: "green"
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
                <div id="main_menu">
                    <div className={styles.logo_area}>
                        <LogoPik src={logo} alt="пари и култура" />
                    </div>
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
                                <div>
                                    <NavLink
                                        to="authors"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        <H1>Насоки за авторите</H1>
                                    </NavLink>
                                </div>
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
