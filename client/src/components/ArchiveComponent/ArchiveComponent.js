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



    return (
        <div className={styles.ArchiveComponentWrapper}>


            <div className={styles.ArchiveComponentDiv}>
                <div className={styles.ArchiveComponentCards}>
                    {
                        iframes.map(
                            iframe =>
                                <div
                                    className={styles.ArchiveComponentCard}
                                    key={iframe.id}
                                    dangerouslySetInnerHTML={
                                        { __html: iframe.iframe }
                                    }
                                >
                                </div>
                        )
                    }

                    {/* {
                        iframes.map(
                            iframe =>
                                <div key={iframe.id}>
                                    <h2>{iframe.Heading}</h2>
                                    <StyledH3>{iframe.Description}</StyledH3>
                                    <StyledH4>{iframe.Date}</StyledH4>
                                </div>
                        )
                    } */}
                </div>

                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1Zr4k3XlqhxU5TRWP9CaCxkjTsqsxmGBc/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Lorem Ipsum</h2>
                    <StyledH3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum sollicitudin orci, et gravida tellus pharetra vel. Etiam odio nisl, rhoncus ac diam quis, tristique sodales erat. Aliquam pellentesque tellus vitae egestas viverra. Pellentesque dictum, nibh in egestas suscipit, mi ante luctus ante, id aliquet mi nibh eget tortor. Suspendisse ac ante quis est tempus tristique. Sed auctor, sem eget placerat bibendum, erat lectus consectetur neque, a dignissim dolor nulla at turpis. Nam quis dignissim ex, in eleifend libero. Cras a quam lectus.</StyledH3>
                    <StyledH4>23.06.2022</StyledH4>
                </div>
                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1zvlZrUXtojV1I4si-Tu-TJSk5Q7jl8oC/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Згалавие</h2>
                    <StyledH3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum sollicitudin orci, et gravida tellus pharetra vel. Etiam odio nisl, rhoncus ac diam quis, tristique sodales erat. Aliquam pellentesque tellus vitae egestas viverra. Pellentesque dictum, nibh in egestas suscipit, mi ante luctus ante, id aliquet mi nibh eget tortor. Suspendisse ac ante quis est tempus tristique. Sed auctor, sem eget placerat bibendum, erat lectus consectetur neque, a dignissim dolor nulla at turpis. Nam quis dignissim ex, in eleifend libero. Cras a quam lectus.</StyledH3>
                    <StyledH4>дата</StyledH4>

                </div>
                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1yF8rRXN4fzjz2JaTss--QxApDWcYXaWw/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Lorem Ipsum</h2>
                    <StyledH3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum sollicitudin orci, et gravida tellus pharetra vel. Etiam odio nisl, rhoncus ac diam quis, tristique sodales erat. Aliquam pellentesque tellus vitae egestas viverra. Pellentesque dictum, nibh in egestas suscipit, mi ante luctus ante, id aliquet mi nibh eget tortor. Suspendisse ac ante quis est tempus tristique. Sed auctor, sem eget placerat bibendum, erat lectus consectetur neque, a dignissim dolor nulla at turpis. Nam quis dignissim ex, in eleifend libero. Cras a quam lectus.</StyledH3>
                    <StyledH4>дата</StyledH4>

                </div>
                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1dOy92YBg5lcBLBQXYy60EwHvmrpKaX6x/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Згалавие</h2>
                    <StyledH3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum sollicitudin orci, et gravida tellus pharetra vel. Etiam odio nisl, rhoncus ac diam quis, tristique sodales erat. Aliquam pellentesque tellus vitae egestas viverra. Pellentesque dictum, nibh in egestas suscipit, mi ante luctus ante, id aliquet mi nibh eget tortor. Suspendisse ac ante quis est tempus tristique. Sed auctor, sem eget placerat bibendum, erat lectus consectetur neque, a dignissim dolor nulla at turpis. Nam quis dignissim ex, in eleifend libero. Cras a quam lectus.</StyledH3>
                    <StyledH4>дата</StyledH4>

                </div>
                <div className={styles.ArchiveComponentCards}>
                    <iframe src="https://drive.google.com/file/d/1WoHtVmZQEwU1zI8zTCV0BSADjicIZ18v/preview" width="440" height="610" allow="autoplay"></iframe>
                    <h2>Згалавие</h2>
                    <StyledH3>Описание</StyledH3>
                    <StyledH4>дата</StyledH4>

                </div>
            </div>
        </div >
    )
}
