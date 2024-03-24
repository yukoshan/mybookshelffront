import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import EditBookForm from './components/EditBookForm';
// import DeleteButton from './components/DeleteButton';
import './App.css'

function App() {
    const deleteBook = (id) => {
        fetch(`http://127.0.0.1:8000/api/books/${id}/`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                // 削除成功時の処理（例：ページのリロードや状態の更新）
                window.location.reload();
            } else {
                alert('Delete failed.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };


    return (
        <Router>
            <div className="App">
                <h1>My Bookshelf</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Book</Link>
                        </li>
                    </ul>
                </nav>
                <Routes> 
                    <Route path="/" element={<BookList onDelete={deleteBook} />} />
                    <Route path="/add" element={<BookForm />} />
                    <Route path="/edit/:id" element={<EditBookForm />} />
                </Routes> 
            </div>
        </Router>
    );
}

export default App;
