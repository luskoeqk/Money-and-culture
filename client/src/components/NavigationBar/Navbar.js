import logo from '../../assets/logo/pklogo.png'

import React from 'react'
import {
    Nav,
    H1,
    Image,
} from './NavbarElements';

export const Navbar = () => {

    return (
        <>
            <Nav>
                
                <H1>Начало</H1>
                <H1>За списанието</H1>
                <Image src={logo} alt="Пари и култура" />
                <H1>Архив</H1>
                <H1>Насоки за авторите</H1>

            </Nav>
        </>
    )
}
