import React, {useState, useEffect} from 'react';

import {Container, Typography} from '@material-ui/core';

import ListOfItems from './ListOfItems';
import {get} from '../Resources/api';

export default function Page() {

    const [listItems,
        setListItems] = useState([])

    useEffect(() => {
        get().then(data => {
            const structuredData = data
                .data
                .items
                .filter(item => item.saleInfo.saleability !== 'NOT_FOR_SALE')
                .map(item => ({name: item.volumeInfo.title, image: item.volumeInfo.imageLinks.thumbnail, rating: item.volumeInfo.averageRating, price: `${item.saleInfo.listPrice.amount}`}))
            setListItems(structuredData)
        }).catch(error => console.error(error))

    }, [])

    return (
        <Container style={{
            margin: '40px auto'
        }}>
            <Typography component='h1' variant='h3'>List of books related to Ready Player One</Typography>
            <ListOfItems list={listItems}/>
        </Container>

    )
}
