import logo from '../../assets/logo/pklogo.png'

import { NavLink } from 'react-router-dom'

import {
    Nav,
    H1,
    Image,
} from './NavbarElements';

export const Navbar = () => {


    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";


    return (
        <>
            <Nav>

                <H1>
                    <NavLink to="/">
                        Начало
                    </NavLink>
                </H1>
                <H1>
                    <NavLink to="about">
                        За списанието
                    </NavLink>
                </H1>
                <Image src={logo} alt="Пари и култура" />
                <H1>Архив</H1>
                <H1>Насоки за авторите</H1>

            </Nav>
        </>
    )
}
