import React from 'react'

import styles from './EditorialBoard.module.css'

export const EditorialBoardCard = (
    props
) => {


    return (

        <div className='Wrapper'>
            <a href={props.hyperlink} target="_blank" rel="noreferrer">

                <article className={styles.EditorialBoardCardArticle}>

                    <div>
                        <img style={{
                            width: '95%',
                            cursor: 'pointer',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '25px 25px 0px 0px',
                        }}
                            src={props.picture} alt={props.title} />
                    </div>
                    <div style={{
                    }}>
                        <h3>{props.title}</h3>
                    </div>
                </article>
            </a>
        </div>
    )
}
