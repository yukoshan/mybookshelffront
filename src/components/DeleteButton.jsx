import React from 'react';

function DeleteButton({ id, onDelete }) {
    const handleClick = () => {
        // 削除の確認ダイアログを表示
        const isConfirmed = window.confirm('Are you sure you want to delete this book?');
        if (isConfirmed) {
            // 削除が確認された場合、onDelete コールバックを呼び出す
            onDelete(id);
        }
    };

    return (
        <button onClick={handleClick}>Delete</button>
    );
}

export default DeleteButton;
