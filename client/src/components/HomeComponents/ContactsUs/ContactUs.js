
import styles from './ContactUs.module.css';

import styled from 'styled-components';

const H1 = styled.h1`color: #d0d9db;`


export const ContactUs = () => {
    return (
        <div className={styles.ContactUsWrapper}>
            <div className={styles.ContactUsInnerWrapper}>
                <div className={styles.ContactUsIFrame}>
                    <iframe
                        title="VUZF map"
                        width={752}
                        height={445}
                        src="https://maps.google.com/maps?q=VUZF&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                    />
                </div>
                <div className={styles.ContactUsContactInfo}>
                    <H1><strong>КОНТАКТИ</strong></H1>
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
