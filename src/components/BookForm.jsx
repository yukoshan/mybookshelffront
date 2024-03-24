import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookForm.css'

function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookData = { title, author };

        fetch('http://127.0.0.1:8000/api/books/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData),
        })
            .then((response) => response.json())
            .then(() => {
                navigate('/'); // 一覧画面に戻る
            });
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BookForm;
