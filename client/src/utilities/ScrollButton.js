
import React, { useEffect, useState } from 'react'

import styles from './ScrollButton.module.css'

export const ScrollButton = () => {

    const [showGoTop, setShowGoTop] = useState(false)

    const handleVisibleButton = () => {
        setShowGoTop(window.pageYOffset > 50)
    }

    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton)
    }, [])

    return (
        <div className={showGoTop ? '' : styles.goTopHidden} onClick={handleScrollUp}>
            <button type={'button'} className={styles.goTop}>
                ↑
                <span className={styles.goTopIcon}></span>
            </button>
        </div>
    )

}