import React from 'react'
import {Grid} from '@material-ui/core'
import Item from './Item'

export default function ListOfItems({list}) {
    return (
        <Grid container spacing={4} style={{marginTop: 40}}>
            {list.map((item, index) => (<Item key={index} item={item}/>))}
        </Grid>
    )
}
