
import * as React from 'react';

import logo from '../../assets/logo/pklogo.png'


import { NavLink, Link } from 'react-router-dom'

// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

import {
    Nav,
    H1,
    Image,
} from './NavbarElements';

export const Navbar = () => {


    let activeStyle = {
        color: "#878787",
        borderColor: "green"
    };

    // const [menu, setMenu] = React.useState('');

    // const handleChange = (event) => {
    //     setMenu(event.target.value);
    // };

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

                <NavLink
                    to="about"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <H1>За списанието</H1>

                </NavLink>

                {/*
                
                    //TODO:
                    // dropdown

                <Box sx={{
                    width: 200,
                    fontSize: '24px',
                    color: 'success.main',	
                }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={menu}
                            label="за списанието"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>За списанието</MenuItem>
                            <MenuItem value={20}>Редакционнен екип</MenuItem>
                        </Select>
                    </FormControl>
                </Box> */}

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
