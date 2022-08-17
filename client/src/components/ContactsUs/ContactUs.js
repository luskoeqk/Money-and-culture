import React from 'react'

import styles from './ContactUs.module.css'

export const ContactUs = () => {
    return (
        <div className={styles.ContactUsWrapper}>
            <div className={styles.ContactUsInnerWrapper}>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            width={752}
                            height={445}
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=VUZF&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                        />
                        <a href="https://123movies-to.org" />
                        <br />
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    ".mapouter{position:relative;text-align:right;height:445px;width:752px;}"
                            }}
                        />
                        <a href="https://www.embedgooglemap.net">get google map link</a>
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    ".gmap_canvas {overflow:hidden;background:none!important;height:445px;width:752px;}"
                            }}
                        />
                    </div>
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
