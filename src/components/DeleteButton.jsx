import React from 'react';

function DeleteButton({ id, onDelete }) {
    const handleClick = () => {
        // 削除の確認ダイアログを表示
        const isConfirmed = window.confirm('書籍を削除してよろしいですか?');
        if (isConfirmed) {
            // 削除が確認された場合、onDelete コールバックを呼び出す
            onDelete(id);
        }
    };

    return (
        <button onClick={handleClick}>削除</button>
    );
}

export default DeleteButton;
