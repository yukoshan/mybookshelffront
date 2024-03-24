import React, { useState } from 'react';

function EditBookForm({ book, onUpdate }) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    // 他のフィールドも同様に追加

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate({ id: book.id, title, author /* 他のフィールドも追加 */ });
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
            <button type="submit">Update</button>
        </form>
    );
}

export default EditBookForm;
