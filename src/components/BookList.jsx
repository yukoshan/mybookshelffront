// import './BookList.css';
// import React, { useState, useEffect } from 'react';

// function BookList() {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/api/books/')
//         .then(response => response.json())
//         .then(data => setBooks(data))
//         .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div>
//             {books.map(book => (
//                 <div key={book.id}>
//                     <h2>{book.title}</h2>
//                     <p>{book.author}</p>
//                     <p>{book.text}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default BookList;

import React from 'react';
import DeleteButton from './DeleteButton';

function BookList({ books, onEdit, onDelete }) {
    return (
        <div>
            {books.map((book) => (
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    {/* 他のフィールドも表示 */}
                    <button onClick={() => onEdit(book)}>Edit</button>
                    <DeleteButton id={book.id} onDelete={onDelete} />
                </div>
            ))}
        </div>
    );
}

export default BookList;
