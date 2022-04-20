import { useState, useEffect } from "react";
import BookService from "../../service/book.service";
import BookForm from "./book-form"

function BookList() {
    const [books, setBooks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showList, setShowList] = useState(true);

    const getbooks = async () => {
        console.log("BookList useEffect...");
        const data = await BookService.getBooks();
        console.log("BookList useEffect... data", data);
        setBooks(data);
    }

    useEffect(() => {
        getbooks();
    }, []);

    const onAddBook = () => {
        setShowForm(true);
        setShowList(false);
    }

    const afterSave = () => {
        setShowForm(false);
        setShowList(true);
        getbooks();
    }
    
    return <>
        Book List
        <button onClick={onAddBook}>Add Book</button>
        {showForm && <BookForm afterSave={afterSave} />}
        {showList &&
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                </tr>
                {
                    books.map(book => {
                        return <tr>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                        </tr>
                    })
                }
            </table>
        }
    </>
}

export default BookList;