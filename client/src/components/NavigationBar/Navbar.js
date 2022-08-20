import logo from '../../assets/logo/pklogo.png'

import { NavLink, Link } from 'react-router-dom'

import {
    Nav,
    H1,
    Image,
} from './NavbarElements';

export const Navbar = () => {


    let activeStyle = {
        transition: "0.2s",
        borderBottom: "solid 3px #A0A0A0",
        // color: "#dfe8eb"
        color: "#A0A0A0"

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
                <Link to="/">
                    <Image src={logo} alt="Пари и култура" />
                </Link>
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
