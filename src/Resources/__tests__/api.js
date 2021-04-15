import { get } from "../api";
import mockAxios from "axios";

it("call axios", async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({data: {results: ['']}}));

  const books = await get();
  
    expect(books).toEqual({results: ['']})
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith("https://www.googleapis.com/books/v1/volumes?q=ready+player+one&filter=paid-ebooks&maxResults=15&key=" + process.env.REACT_APP_API)
});
