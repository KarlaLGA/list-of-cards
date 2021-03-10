import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core'
import React, {useState} from 'react'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: '100%',
        justifyContent: 'center'
    },
    image: {
        maxHeight: '100%',
        width: 'auto',
        margin: 'auto'
    },
    hoverImage: {
        opacity: 0.5

    },
    container: {
        display: 'flex'
    },
    button: {
        opacity: 0,
        position: 'absolute'
    },
    showButton: {
        opacity: 1,
        position: 'absolute',
        margin: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    wrapper: {
        position: 'relative',
        minWidth: 180,
        height: 180
    },
    label: {
        fontWeight: 500
    }

}))

export default function Item({item}) {

    const classes = useStyles()
    const [hovered,
        setHovered] = useState(false)
    return (
        <Grid item xs={6} md={4}>

            <Card
                className={classes.root}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>

                <div className={classes.wrapper}>
                    <CardMedia
                        image={item.image}
                        component='img'
                        className={classes.image}
                        classes={{
                        root: hovered
                            ? `${classes.hoverImage} ${classes.image}`
                            : classes.image
                    }}/>
                    <Button
                        variant='contained'
                        color='primary'
                        classes={{
                        root: hovered
                            ? classes.showButton
                            : classes.button
                    }}>Add to Cart</Button>
                </div>
                <CardContent className={classes.content}>

                    <div>
                        <Typography>
                            <span className={classes.label}>Name:</span>
                            {item.name}</Typography>
                        <Typography>
                            <span className={classes.label}>Price:</span>
                            ${item.price} CAD</Typography>
                        <Typography>
                            <span className={classes.label}>Rating:</span>
                            {item.rating}/5</Typography>
                    </div>

                </CardContent>
            </Card>
        </Grid>
    )
}
