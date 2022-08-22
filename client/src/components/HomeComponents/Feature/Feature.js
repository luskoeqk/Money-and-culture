import React from 'react'

import {
    Image,
    Logo,
    Paragraph,
    Button,
    Wrapper
} from './FeatureElements'

import img from '../../../assets/Feature-Images/pk1.png'
import logo from '../../../assets/logo/pklogo.png'

import { Link } from 'react-router-dom'


export const Feature = () => {

    return (
        <>
            <Wrapper>

                <Image src={img} alt="" />

                <Logo src={logo} alt="" />

                <Paragraph>Светът на парите и светът на културата могат да бъдат разглеждани в тяхната автономност, отделно. Но те могат да бъдета разглеждани и заедно - в това вятва екипът на Пари и култура.</Paragraph>

                <Link to='about'>
                    <Button>Научи повече</Button>
                </Link>

            </Wrapper>

        </>
    )
}
