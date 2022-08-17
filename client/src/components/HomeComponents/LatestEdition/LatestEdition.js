import React from 'react'

import cover from '../../../assets/editions/korica4-01.jpg'

import styles from "./LatestEdition.module.css";
import styled from 'styled-components'

export const LatestEdition = () => {

    const StyledImg = styled.img`
        width: 300px;
    `

    const StyledPar = styled.p`
        font-size: 12px;
    `
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
                    <button>ПРОЧЕТЕТЕ ТУК</button>|
                </div>
            </div>
        </div>







        // <div className={styles.wrapper}>

        //     <div className={styles.LatestEdition}>

        //         <div className={styles.CoverImage}>
        //             <img src={cover} alt="" />
        //         </div>

        //         <div className={styles.HeaderAndSubheader}>
        //             <h1><strong>Пари и култура</strong></h1>
        //             <h2><i>Брой 1/2022</i></h2>
        //         </div>

        //         <div className={styles.Description}>

        //             <p>Стратегическото управление в държавата</p>
        //             <p>оценка на факторите и ефективността на иновационната дейност и дигитализацията на банките в българия</p>
        //             <p>climate change as a challende for the economy</p>
        //             <p>дигитализацията като предпоставка за устойчиво развитие при мсп в българия</p>
        //         </div>

        //         <div className={styles.ReadMoreButton}>
        //             <button>ПРОЧЕТЕТЕ ТУК</button>
        //         </div>

        //     </div>
        // </div>

    )
}
