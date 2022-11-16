/* eslint-disable jsx-a11y/iframe-has-title */

import styles from './ContactUs.module.css'

// import addresss from '../../../assets/svg/address.svg'

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
                    {/* <ul>
                        <li>София 1618 <br /> ул. „Гусла No1 (кв. „Овча Купел”) <br /> Висше училище по застраховане и финанси <br /> ст. 405</li>
                        <li>00359 2 40 80 15</li>
                        <li><a href="mailto:pariikultura@vuzf.bg?">pariikultura@vuzf.bg</a></li>
                    </ul> */}

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <img src={require('../../../assets/svg/location.svg').default} alt="my" />
                                    </div>
                                </td>
                                <td>
                                    София 1618 ул. „Гусла No1 (кв. „Овча Купел”) Висше училище по застраховане и финанси ст. 405
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src={require('../../../assets/svg/phone.svg').default} alt="my" />
                                    </div>
                                </td>
                                <td>00359 2 40 80 15</td>
                            </tr>
                            <tr>
                                <td>
                                    asd
                                </td>
                                <td>
                                    <a href="mailto:pariikultura@vuzf.bg?">pariikultura@vuzf.bg</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
