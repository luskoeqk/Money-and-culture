
import logo from '../../assets/logo/pklogo.png'


import { NavLink, Link } from 'react-router-dom'

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
