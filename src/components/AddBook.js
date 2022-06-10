import React, { useState } from 'react';

const AddBook = () => {
  const [data, setData] = useState({ book: '', author: '' });

  const inputData = (e) => {
    const inputField = e.target.name;
    switch (inputField) {
      case 'title':
        setData({ book: e.target.value, author: data.author });
        break;
      case 'author':
        setData({ author: e.target.value, book: data.book });
        break;
      default:
        setData({ book: data.book, author: data.author });
    }
  };

  const dataStore = () => {};

  return (
    <>
      <div className="add-book-container">
        <h2>Add Book</h2>
        <form action="#" method="post">
          <input type="text" name="title" onChange={inputData} placeholder="Book title" />
          <input type="text" name="author" onChange={inputData} placeholder="Author" />
          <button type="button" onClick={dataStore}>Add Book</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
