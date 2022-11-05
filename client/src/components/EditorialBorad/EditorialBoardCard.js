import React from 'react'

import styles from './EditorialBoard.module.css'
import styled from 'styled-components';

const Image = styled.img`
    width: 15vw;

    @media all and (max-width: 880px){
        width: 50vw;
    }
`

export const EditorialBoardCard = (
    props
) => {


    return (

        <div className='Wrapper'>
            <a href={props.hyperlink} target="_blank" rel="noreferrer">

                <article className={styles.EditorialBoardCardArticle}>

                    <div>
                        <Image src={props.picture} alt={props.title} />
                    </div>
                    <div>
                        <h3>{props.title}</h3>
                    </div>
                </article>
            </a>
        </div>
    )
}
