
import styles from './ArchiveComponent.module.css';

import { useEffect, useState } from 'react'

import { firestoreFirebase } from '../../firebase'
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";


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

            console.log(err);
        };
        console.log('useffect');
    }, [])



    return (
        <div className={styles.ArchiveComponentDiv}>
            <div className={styles.ArchiveComponentCards}>
                {iframes.map(iframe =>
                    <div className={styles.ArchiveComponentCard} key={iframe.id}
                        dangerouslySetInnerHTML={
                            { __html: iframe.iframe }
                        }>
                    </div>)}
            </div>
        </div>
    )
}
