
import logoPik from '../../assets/logo/pklogo.png'
import logoVUZF from '../../assets/logo/vuzflogo.png'

import styles from './Footer.module.css'
import styled from 'styled-components'

import { Link } from 'react-router-dom'


const StyledHr = styled.hr`
    border-top: 4px solid #d0d9db;
    border-bottom: none;
    width: auto;
`

const StyledUl = styled.ul`
    list-style-type: none;
    padding: 5px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const StyledImgVuzf = styled.img`
    max-width: 150px;
`
const StyledImgPik = styled.img`
    max-width: 350px;
`


export const Footer = () => {

    return (
        <>
            <div className={styles.FooterDivCopyRight}>
                <p>Copyright 2020</p>
                <p>Висше училище по застраховане и финанси</p>
                <p>Никаква част от тово списание не може да бъде превеждана или възпроизвеждана под каквато и да е форма без писменото разрешение на издателя</p>
            </div>
            <div className={styles.FooterDivNavigation}>
                <br />
                <div className={styles.FooterPikLogo}>
                    <StyledImgPik src={logoPik} alt="" />
                </div>
                <div className={styles.FooterLinks}>

                    <div className={styles.FooterItem}>
                        <StyledHr />
                        <StyledUl>
                            <li><Link to="/">Начало</Link></li>
                            <li><Link to="about">За списанието</Link></li>
                            <li><Link to="archive">Архив</Link></li>
                            <li><Link to="for-authors">Насоки за авторите</Link></li>
                        </StyledUl>
                    </div>

                    <div className={styles.FooterItem}>
                        <StyledHr />
                        <StyledUl>
                            <li><Link to="terms">Общи условия</Link></li>
                            <li><Link to="policy">Политика за поверителност и защита на личните данни</Link></li>
                        </StyledUl>
                    </div>

                    <div className={styles.FooterItem}>
                        <StyledHr />
                        <StyledUl>
                            <a href="http://vuzf.bg" target="_blank" rel="noreferrer">
                                <li><StyledImgVuzf src={logoVUZF} alt="" /></li>
                                <li>Висше училище по застраховане и финанси</li>
                            </a>
                        </StyledUl>
                    </div>
                </div>
            </div>
        </>

    )
}
