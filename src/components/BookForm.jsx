import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookForm.css'

function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [readingdate, setReadingdate] = useState('');
    const [rate, setRate] = useState('');
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookData = { title, author, readingdate, rate, category, text };

        fetch('http://127.0.0.1:8000/api/books/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData),
        })
            .then((response) => response.json())
            .then(() => {
                navigate('/');
            });
    };

    return (
        <div>
            <h2>書籍登録</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="題名"
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="著者"
                />
                <div className="form-row">
                    <div>
                        <input
                            type="date"
                            value={readingdate}
                            onChange={(e) => setReadingdate(e.target.value)}
                            placeholder="読了日"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            placeholder="評価"
                        />
                    </div>
                    <div>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">カテゴリを選択して下さい</option>
                            <option value="novel">小説</option>
                            <option value="essay">エッセイ</option>
                            <option value="practical">実用書</option>
                        </select>
                    </div>
                </div>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="感想"
                />
                <button type="submit">登録</button>
            </form>
        </div>
    );
}

export default BookForm;
