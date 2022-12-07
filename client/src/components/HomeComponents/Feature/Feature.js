
import { Link } from 'react-router-dom'

import {
    Logo,
    Paragraph,
    Button,
    Wrapper
} from './FeatureElements'

import logo from '../../../assets/logo/pklogo.png'

import { useTranslation } from "react-i18next";


export const Feature = () => {

    const { t } = useTranslation(["feature"]);


    return (
        <>
            <Wrapper>

                <Logo src={logo} alt="" />

                <Paragraph>{t('par')}</Paragraph>

                <Link to='about'>
                    <Button>{t('button')}</Button>
                </Link>
            </Wrapper>
        </>
    )
}
