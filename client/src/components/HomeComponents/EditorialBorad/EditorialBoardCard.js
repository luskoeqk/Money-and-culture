import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import styles from './EditorialBoard.module.css'

export const EditorialBoardCard = (
    props
) => {


    return (
        <div className={styles.EditorialBoardCard} style={{ width: '225px' }}>
            <a style={{ textDecoration: 'none' }} href={props.hyperlink} target="_blank" rel="noreferrer">
                <Card sx={{
                    maxWidth: 225,
                    maxHeight: 407,
                    textAlign: 'center',
                    border: '3px solid white',
                    borderRadius: '25px',
                    backgroundColor: '#d0d9db',
                }}>
                    <CardActionArea>

                        <CardMedia

                            component="img"
                            height="300"
                            image={props.picture}
                            alt={''}
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h6" component="div">
                                {props.title}
                            </Typography>
                        </CardContent>


                    </CardActionArea>
                </Card>
            </a>

        </div>
    )
}
