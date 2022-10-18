/* eslint-disable jsx-a11y/iframe-has-title */

import styles from './ContactUs.module.css'

export const ContactUs = () => {
    return (
        <div className={styles.ContactUsWrapper}>
            <div className={styles.ContactUsInnerWrapper}>
                <div className={styles.ContactUsIFrame}>
                    <iframe
                        width={752}
                        height={445}
                        src="https://maps.google.com/maps?q=VUZF&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                    />
                </div>
                <div className={styles.ContactUsContactInfo}>
                    <h1><strong>КОНТАКТИ</strong></h1>
                    <ul>
                        <li>София 1618 <br /> ул. „Гусла No1 (кв. „Овча Купел”) <br /> Висше училище по застраховане и финанси <br /> ст. 405</li>
                        <li>00359 2 40 80 15</li>
                        <li><a href="mailto:pariikultura@vuzf.bg?">pariikultura@vuzf.bg</a></li>

                    </ul>
                </div>

            </div>
        </div>
    )
}
