import React from 'react'

import styles from './EditorialBoard.module.css'

export const EditorialBoardCard = (
    props
) => {


    return (

        <div>
            <a href={props.hyperlink} target="_blank" rel="noreferrer">

                <article className={styles.EditorialBoardCardArticle}>

                    <img style={{
                        height: 'auto',
                        width: '100%',
                        cursor: 'pointer',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '25px 25px 0px 0px',
                    }}
                        src={props.picture} alt={props.title} />
                    <div>
                        <h3>{props.title}</h3>
                    </div>
                </article>
            </a>
        </div>
    )
}
