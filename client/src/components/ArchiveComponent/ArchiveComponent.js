/* eslint-disable jsx-a11y/iframe-has-title */

import styles from './ArchiveComponent.module.css';
import styled from 'styled-components'

import { useEffect, useState } from 'react'

import { firestoreFirebase } from '../../firebase'
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

const StyledH4 = styled.h4`
        text-align: right;
        font-style: italic;
        padding-right: 20px;
`

const StyledH3 = styled.h3`
    font-size: 20px;
`

export const ArchiveComponent = () => {



    const [iframes, setIframes] = useState([])

    useEffect(() => {

        let list = [];

        try {

            const fetchData = async () => {
                const querySnapshot = await getDocs(collection(firestoreFirebase, 'iframes'));
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setIframes(list)
                // console.log('list: ', list);
            }

            fetchData();
        } catch (err) {

            console.log(err, 'errors');
        };
    }, [])


    const listItems = iframes.map((iframe) =>
        <div className={styles.ArchiveComponentCards}>

            <table>
                <tr><div key={iframe.id} dangerouslySetInnerHTML={{ __html: iframe.iframe }}></div></tr>
                <h2>{iframe.Heading}</h2>
                <StyledH3>{iframe.Description}</StyledH3>
                <StyledH4>{iframe.Date}</StyledH4>
            </table>
        </div>
    )


    return (
        <div className={styles.ArchiveComponentWrapper}>

            <div className={styles.ArchiveComponentDiv}>

                {listItems}

                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/12GIPAonrv6o6W3haDxZr-d2WI5GAu_92/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>1/2022</h2>
                </div>
            
                <div className={styles.ArchiveComponentCards}>
                    
                </div>

            </div>
        </div >


    )
}
