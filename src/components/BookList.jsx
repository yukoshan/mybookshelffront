import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import './BookList.css'

function BookList({ onDelete }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // APIから本のリストを取得
        fetch('http://127.0.0.1:8000/api/books/')
            .then((response) => response.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div className="container">
            <h2>書籍一覧</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <span>{book.title} - {book.author}</span>
                        <div className="buttons">
                            <Link to={`/edit/${book.id}`}>Edit</Link>
                            <DeleteButton id={book.id} onDelete={onDelete} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
