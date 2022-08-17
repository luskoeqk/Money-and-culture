import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const EditorialBoradCard = (
    props
) => {


    return (
        <div style={{ width: '300px' }}>
            <a style={{ textDecoration: 'none' }} href={props.hyperlink} target="_blank" rel="noreferrer">
                <Card sx={{
                    // maxWidth: 345,
                    textAlign: 'center',
                    border: '1px solid white',
                    borderRadius: '25px',
                    backgroundColor: '#d0d9db',
                }}>
                    <CardActionArea>

                        <CardMedia

                            component="img"
                            height="340"
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
