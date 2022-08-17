import logo from '../../assets/logo/pklogo.png'

import { NavLink } from 'react-router-dom'

import {
    Nav,
    H1,
    Image,
} from './NavbarElements';

export const Navbar = () => {


    let activeStyle = {
        transition: "0.2s",
        borderBottom: "solid 3px #dfe8eb",
        color: "#dfe8eb"

    };


    return (
        <>
            <Nav>

                <H1>
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Начало
                    </NavLink>
                </H1>
                <H1>
                    <NavLink
                        to="about"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        За списанието
                    </NavLink>
                </H1>
                <Image src={logo} alt="Пари и култура" />
                <H1>
                    <NavLink
                        to="archive"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Архив
                    </NavLink>
                </H1>
                <H1>
                    <NavLink
                        to="for-authors"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Насоки за авторите
                    </NavLink>
                </H1>

            </Nav>
        </>
    )
}
