import React from 'react'

import cover from '../../../assets/editions/korica4-01.jpg'

import styles from "./LatestEdition.module.css";

export const LatestEdition = () => {
    return (

        <div className={styles.wrapper}>

            <div className={styles.LatestEdition}>

                <div className={styles.CoverImage}>
                    <img src={cover} alt="" />
                </div>

                <div className={styles.HeaderAndSubheader}>
                    <h1><strong>Пари и култура</strong></h1>
                    <h2><i>Брой 1/2022</i></h2>
                </div>

                <div className={styles.Description}>

                    <p>Стратегическото управление в държавата</p>
                    <p>оценка на факторите и ефективността на иновационната дейност и дигитализацията на банките в българия</p>
                    <p>climate change as a challende for the economy</p>
                    <p>дигитализацията като предпоставка за устойчиво развитие при мсп в българия</p>
                </div>

                <div className={styles.ReadMoreButton}>
                    <button>ПРОЧЕТЕТЕ ТУК</button>
                </div>

            </div>
        </div>

    )
}
