import axios from "axios";

// async function
export const get = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=ready+player+one&filter=paid-ebooks&maxResults=15&key=${process.env.REACT_APP_API}`
  );
  return response.data;
};

//normal axios function
// export const get = () => {
//     return axios.get(`https://www.googleapis.com/books/v1/volumes?q=ready+player+one&filter=paid-ebooks&maxResults=15&key=${process.env.REACT_APP_API}`)
// }
