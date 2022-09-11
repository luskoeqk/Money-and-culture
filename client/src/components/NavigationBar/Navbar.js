
import * as React from 'react';

import logo from '../../assets/logo/pklogo.png'

import { NavLink, Link, useLinkClickHandler } from 'react-router-dom'

// mui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import {
    Nav,
    H1,
    Image,
    MuiDropDown,
} from './NavbarElements';

export const Navbar = () => {

    //mui
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    let activeStyle = {
        color: "#878787",
        borderColor: "green"
    };


    return (
        <>
            <Nav>


                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <H1>Начало</H1>
                </NavLink>

                {/* nav link ex */}
                {/* <NavLink
                    to="about"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <H1>За списанието</H1>
                </NavLink> */}
                {/* nav link ex */}

                {/* mui */}
                <MuiDropDown>
                    <Button
                        style={{
                            textTransform: 'none',
                            color: "#d0d9db",
                            fontSize: '26px',
                            backgroundColor: 'none',
                            padding: '0px',
                            backgroundColor: 'transparent',
                            fontWeight: 'bold',
                            fontFamily: ['Noto Serif HK', 'serif']
                        
                        }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >
                    За списанието</Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        'color': 'red',
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


            <Link to="/">
                <Image src={logo} alt="Пари и култура" />
            </Link>


            <NavLink
                to="archive"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >
                <H1>Архив</H1>
            </NavLink>


            <NavLink
                to="authors"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >
                <H1>Насоки за авторите</H1>
            </NavLink>

        </Nav>
        </>
    )
}
