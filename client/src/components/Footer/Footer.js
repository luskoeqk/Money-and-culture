
import logoPik from '../../assets/logo/pklogo.png'
import logoVUZF from '../../assets/logo/vuzflogo.png'

import styles from './Footer.module.css'

import styled from 'styled-components'

export const Footer = () => {


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

    const StyledImg = styled.img`
        max-width: 150px;
    `

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
                    <img src={logoPik} alt="" />
                </div>
                <div className={styles.FooterLinks}>

                    <div className={styles.FooterItem}>
                        <StyledHr />
                        <StyledUl>
                            <li>Начало</li>
                            <li>За списанието</li>
                            <li>Архив</li>
                            <li>Насоки за авторите</li>
                        </StyledUl>
                    </div>

                    <div className={styles.FooterItem}>
                        <StyledHr />
                        <StyledUl>
                            <li>Общи условия</li>
                            <li>Политика за поверителност и защита на личните данни</li>
                        </StyledUl>
                    </div>

                    <div className={styles.FooterItem}>
                        <StyledHr />
                        <StyledUl>
                            <li><StyledImg src={logoVUZF} alt="" /></li>
                            <li>Висше училище по застраховане и финанси</li>
                        </StyledUl>
                    </div>
                </div>
            </div>
        </>

    )
}
