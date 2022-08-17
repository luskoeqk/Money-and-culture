import React from 'react'

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.FooterDiv}>
            <p>Copyright 2020</p>
            <p>Висше училище по застраховане и финанси</p>
            <p>Никаква част от тово списание не може да бъде превеждана или възпроизвеждана под каквато и да е форма без писменото разрешение на издателя</p>
        </div>
    )
}
