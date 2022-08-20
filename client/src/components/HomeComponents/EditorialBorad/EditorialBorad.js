import React from 'react'

import styles from "./EditorialBorad.module.css"
import { EditorialBoradCard } from './EditorialBoradCard'

import editor1 from '../../../assets/TestEditorialImage/editor1.jpg'
import editor2 from '../../../assets/TestEditorialImage/editor2.jpg'
import editor3 from '../../../assets/TestEditorialImage/editor3.jpg'
import editor4 from '../../../assets/TestEditorialImage/editor4.jpg'
import editor5 from '../../../assets/TestEditorialImage/editor5.jpg'
import editor6 from '../../../assets/TestEditorialImage/editor6.jpg'



export const EditorialBorad = () => {
    return (
        <div className={styles.EditorialBorad}>
            <div className={styles.EditorialBoradCards}>
                <EditorialBoradCard picture={editor1} title="доц. д-р. Григорий Вазов" hyperlink="https://vuzflab.eu/grigoriivazov/" />
                <EditorialBoradCard picture={editor2} title="доц. д-р. Станислав Димитров" hyperlink="https://vuzflab.eu/2020/10/23/%d0%b4%d0%be%d1%86-%d0%b4-%d1%80-%d1%81%d1%82%d0%b0%d0%bd%d0%b8%d1%81%d0%bb%d0%b0%d0%b2-%d0%b4%d0%b8%d0%bc%d0%b8%d1%82%d1%80%d0%be%d0%b2-%d0%b2%d1%83%d0%b7%d1%84-%d0%b1%d1%8a%d0%bb%d0%b3%d0%b0/" />
                <EditorialBoradCard picture={editor3} title="доц. д-р Радостин Вазов" hyperlink="https://vuzflab.eu/radostin_vazov/" />
                <EditorialBoradCard picture={editor4} title="проф. д-р. Даниела Бобева" hyperlink="https://vuzflab.eu/%D0%B4%D0%BE%D1%86-%D0%B4-%D1%80-%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D0%B0-%D0%B1%D0%BE%D0%B1%D0%B5%D0%B2%D0%B0/" />
                <EditorialBoradCard picture={editor5} title="проф. д-р. Огняна Стоичкова" hyperlink="https://vuzflab.eu/ognyana_stoichkova/" />
                <EditorialBoradCard picture={editor6} title="доц. д-р Жельо Христозов" hyperlink="https://vuzflab.eu/%d0%b4%d0%be%d1%86-%d0%b4-%d1%80-%d0%b6%d0%b5%d0%bb%d1%8c%d0%be-%d1%85%d1%80%d0%b8%d1%81%d1%82%d0%be%d0%b7%d0%be%d0%b2/" /> 
            </div>
        </div>
    )
}
