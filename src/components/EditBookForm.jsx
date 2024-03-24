import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './EditBookForm.css'

function EditBookForm() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // APIから本のデータを取得してフォームにセット
        fetch(`http://127.0.0.1:8000/api/books/${id}/`)
            .then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setAuthor(data.author);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookData = { title, author };

        fetch(`http://127.0.0.1:8000/api/books/${id}/`, {
            method: 'PUT',
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
            <h2>Edit Book</h2>
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditBookForm;
