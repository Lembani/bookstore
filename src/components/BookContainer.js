import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Books from './Books';

const BookContainer = () => {
  const data = useSelector((state) => state.booksReducer);
  const books = data;

  return (
    <>
      <div className="main-book-container">
        <Books books={books} />
        <AddBook />
      </div>
    </>
  );
};

export default BookContainer;
