import axios from 'axios';

export const get = () => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=ready+player+one&filter=paid-ebooks&maxResults=15&key=${process.env.REACT_APP_API}`)
}
