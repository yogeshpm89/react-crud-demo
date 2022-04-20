import { useState } from "react";
import BookService from "../../service/book.service";

function BookForm(props) {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);

    const onSave = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("BookForm onSave...");
        const data = await BookService.saveBook({ 
            name: name,
            author: author,
            price: price
        });
        console.log("BookForm onSave... data", data);
        props.afterSave();
    }

    return <div style={{border: "1px solid grey", padding: "5px", margin: "5px"}}>
        <form>
            <div className="form-group">
                <label htmlFor="bookTitle">Name</label>
                <input type="text" className="form-control" id="bookName" 
                    placeholder="Enter book name" value={name} 
                    onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="bookTitle">Author</label>
                <input type="text" className="form-control" id="bookAuthor" 
                    placeholder="Enter book author" value={author} 
                    onChange={(e) => setAuthor(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="bookTitle">Price</label>
                <input type="number" className="form-control" id="bookPrice" 
                    placeholder="Enter book price" value={price} 
                    onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <button onClick={onSave}>Save</button>
        </form>
    </div>
}

export default BookForm;