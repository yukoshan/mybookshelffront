import React, { useState } from 'react';

function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    // 他のフィールドも同様に定義

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookData = {
            title: title,
            author: author,
            // 他のフィールドも追加
        };

        fetch('http://127.0.0.1:8000/api/books/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        })
        .then(data => {
            console.log('Success:', data);
            // ここでフォームをリセットするか、成功メッセージを表示するなどの処理を行う
            setTitle('');
            setAuthor('');
            // 他のフィールドもリセット
        })
        .catch((error) => {
            console.error('Error:', error);
            // ここでエラーメッセージを表示するなどの処理を行う
        });
    };

    return (
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
            {/* 他のフィールドの入力フォームも追加 */}
            <button type="submit">Submit</button>
        </form>
    );
}

export default BookForm;
