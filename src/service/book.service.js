import axios from "axios";

const getBooks = async () => {
    var config = {
        method: 'get',
        url: 'http://localhost:8881/v1/books',
        headers: { }
    };
      
    const response = await axios(config);
    if (response.status === 200) {
        return response.data.data
    } else {
        return null;
    }
};

const saveBook = async (book) => {
    var config = {
        method: 'post',
        url: 'http://localhost:8881/v1/books',
        headers: { },
        data: book
    };

    const response = await axios(config);
    if (response.status === 201) {
        return response.data;
    } else {
        return null;
    }
}

export default {
    getBooks: getBooks,
    saveBook: saveBook
}