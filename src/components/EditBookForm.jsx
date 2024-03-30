import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './EditBookForm.css'

function EditBookForm() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [readingdate, setReadingdate] = useState('');
    const [rate, setRate] = useState('');
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // APIから本のデータを取得してフォームにセット
        fetch(`http://127.0.0.1:8000/api/books/${id}/`)
            .then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setAuthor(data.author);
                setReadingdate(data.readingdate);
                setRate(data.rate);
                setCategory(data.category);
                setText(data.text);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookData = { title, author, readingdate, rate, category, text };

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
                <input
                    type="date"
                    value={readingdate}
                    onChange={(e) => setReadingdate(e.target.value)}
                    placeholder="Reading Date"
                />
                <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Rate"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="novel">小説</option>
                    <option value="essay">エッセイ</option>
                    <option value="practical">実用書</option>
                </select>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Text"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditBookForm;
