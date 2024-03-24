// import React from 'react';
// import BookList from './components/BookList';


// function App() {
//     return (
//         <div className="App">
//             <h1>My Bookshelf</h1>
//             <BookList />
//         </div>
//     );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import EditBookForm from './components/EditBookForm';

function App() {
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        // APIリクエストを送信して本のリストを取得
        fetch('http://127.0.0.1:8000/api/books/')
            .then((response) => response.json())
            .then((data) => setBooks(data));
    };

    const addBook = (book) => {
        // APIリクエストを送信して本を登録
        fetch('http://127.0.0.1:8000/api/books/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        })
            .then(() => fetchBooks());  // 成功したらリストを更新
    };

    const updateBook = (updatedBook) => {
        // APIリクエストを送信して本を編集
        fetch(`http://127.0.0.1:8000/api/books/${updatedBook.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        })
            .then(() => {
                fetchBooks();  // 成功したらリストを更新
                setEditingBook(null);  // 編集モードを終了
            });
    };

    const deleteBook = (id) => {
        // APIリクエストを送信して本を削除
        fetch(`http://127.0.0.1:8000/api/books/${id}/`, {
            method: 'DELETE',
        })
            .then(() => fetchBooks());  // 成功したらリストを更新
    };

    return (
        <div className="App">
            <h1>My Bookshelf</h1>
            {editingBook ? (
                <EditBookForm book={editingBook} onUpdate={updateBook} />
            ) : (
                <>
                    <BookForm onSubmit={addBook} />
                    <BookList books={books} onEdit={setEditingBook} onDelete={deleteBook} />
                </>
            )}
        </div>
    );
}

export default App;
