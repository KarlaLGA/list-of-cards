import React from 'react';

import {Container, Typography} from '@material-ui/core';

import data from '../Resources/data';
import ListOfItems from './ListOfItems';

export default function Page() {

    return (
        <Container style={{
            margin: '40px auto'
        }}>
            <Typography component='h1' variant='h3'>List of items</Typography>
            <ListOfItems list={data}/>
        </Container>

    )
}
