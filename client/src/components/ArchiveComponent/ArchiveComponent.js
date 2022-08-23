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



    return (
        <div className={styles.ArchiveComponentWrapper}>


            <div className={styles.ArchiveComponentDiv}>
                <div className={styles.ArchiveComponentCards}>
                    {
                                iframes.map(
                                    iframe =>
                                        <div
                                            // lassName={styles.ArchiveComponentCard}
                                            key={iframe.id}
                                            dangerouslySetInnerHTML={
                                                { __html: iframe.iframe }
                                            }
                                        >
                                        </div>
                                )
                    }
                    {
                        iframes.map(
                            iframe =>
                                <div key={iframe.id}>
                                    <h2>{iframe.Heading}</h2>
                                    <h3>{iframe.Description}</h3>
                                    <StyledH4>{iframe.Date}</StyledH4>
                                </div>
                        )
                    }

                </div>
                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1Zr4k3XlqhxU5TRWP9CaCxkjTsqsxmGBc/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Згалавие</h2>
                    <h3>Описание</h3>
                    <StyledH4>дата</StyledH4>
                </div>
                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1zvlZrUXtojV1I4si-Tu-TJSk5Q7jl8oC/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Згалавие</h2>
                    <h3>Описание</h3>
                    <StyledH4>дата</StyledH4>

                </div>
                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1yF8rRXN4fzjz2JaTss--QxApDWcYXaWw/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Згалавие</h2>
                    <h3>Описание</h3>
                    <StyledH4>дата</StyledH4>

                </div>
                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1dOy92YBg5lcBLBQXYy60EwHvmrpKaX6x/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Згалавие</h2>
                    <h3>Описание</h3>
                    <StyledH4>дата</StyledH4>

                </div>
                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1WoHtVmZQEwU1zI8zTCV0BSADjicIZ18v/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Згалавие</h2>
                    <h3>Описание</h3>
                    <StyledH4>дата</StyledH4>

                </div>
            </div>
        </div>
    )
}
