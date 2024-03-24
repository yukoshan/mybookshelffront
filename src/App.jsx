import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import EditBookForm from './components/EditBookForm';
import DeleteButton from './components/DeleteButton';
import './App.css'

function App() {
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
                    <Route path="/" element={<BookList onDelete={DeleteButton} />} />
                    <Route path="/add" element={<BookForm />} />
                    <Route path="/edit/:id" element={<EditBookForm />} />
                </Routes> 
            </div>
        </Router>
    );
}

export default App;
