import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
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

  return (
    <>
      <section className="input-wrapper">
        <h3>Add New Book</h3>
        <form className="input-form" action="#" method="post">
          <input className="book-name-input" type="text" name="title" onChange={inputData} placeholder="Book title" />
          <input className="author-name-input" type="text" name="author" onChange={inputData} placeholder="Author name" />
          <button type="button" onClick={() => dispatch(addBook(data))}>Add Book</button>
        </form>
      </section>
    </>
  );
};

export default AddBook;
