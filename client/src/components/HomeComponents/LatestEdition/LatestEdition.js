import React from 'react'

import cover from '../../../assets/editions/korica4-01.jpg'

import styles from "./LatestEdition.module.css";
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const StyledImg = styled.img`
    width: 400px;
`

const StyledPar = styled.p`
    font-size: 24px;
`
const Button = styled.button`
    font-size: 24px;
    padding: 14px 40px;
    border-radius: 15px;
    background: #111A1B;
    color: #D0D9DB;
    cursor: pointer;

    &:hover {
        background: #111a1bc7;
    }
`


export const LatestEdition = () => {

    return (



        <div className={styles.LatestEditionWrapper}>
            <div className={styles.LatestEditionImage}>
                <StyledImg src={cover} alt="" />
            </div>
            <div className={styles.LatestEditionInfo}>
                <div className={styles.HeaderAndSubheader}>
                    <h1><strong>Пари и култура</strong></h1>
                    <h2><i>Брой 1/2022</i></h2>
                </div>
                <div className={styles.Description}>
                    <StyledPar>Стратегическото управление в държавата</StyledPar>
                    <StyledPar>оценка на факторите и ефективността на иновационната дейност и дигитализацията на банките в българия</StyledPar>
                    <StyledPar>climate change as a challende for the economy</StyledPar>
                    <StyledPar>дигитализацията като предпоставка за устойчиво развитие при мсп в българия</StyledPar>
                </div>
                <div className={styles.ReadMoreButton}>
                    <Link to='archive'>
                        <Button>ПРОЧЕТЕТЕ ТУК</Button>|
                    </Link>
                </div>
            </div>
        </div>
    )
}
