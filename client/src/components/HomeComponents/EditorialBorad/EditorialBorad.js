import React from 'react'

import styles from "./EditorialBorad.module.css"
import { EditorialBoradCard } from './EditorialBoradCard'

import editor1 from '../../../assets/TestEditorialImage/editor1.jpg'
import editor2 from '../../../assets/TestEditorialImage/editor2.jpg'
import editor3 from '../../../assets/TestEditorialImage/editor3.jpg'
import editor4 from '../../../assets/TestEditorialImage/editor4.jpg'
import editor5 from '../../../assets/TestEditorialImage/editor5.jpg'


export const EditorialBorad = () => {
    return (
        <div className={styles.EditorialBorad}>
            <EditorialBoradCard picture={editor1} title="доц. д-р. Григорий Вазов"  hyperlink="https://vuzflab.eu/grigoriivazov/"/>
            <EditorialBoradCard picture={editor2} title="доц. д-р. Станислав Димитров"  hyperlink="https://vuzflab.eu/grigoriivazov/"/>
            <EditorialBoradCard picture={editor3} title="проф. д-р Румен Трифонов"  hyperlink="https://vuzflab.eu/grigoriivazov/"/>
            <EditorialBoradCard picture={editor4} title="проф. д-р. Даниела Бобева"  hyperlink="https://vuzflab.eu/grigoriivazov/"/>
            <EditorialBoradCard picture={editor5} title="проф. д-р. Огняна Стоичкова"  hyperlink="https://vuzflab.eu/grigoriivazov/"/>
        </div>
    )
}
