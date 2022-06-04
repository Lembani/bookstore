import React from 'react';
import AddBook from './AddBook';
import Books from './Books';

const BookContainer = () => {
  const books = [
    {
      id: 1,
      title: 'Hello World',
      author: 'Lembani Sakala',
      category: 'Novel',
    },
    {
      id: 2,
      title: 'Hello World',
      author: 'Fortune Sakala',
      category: 'Mystery',
    },
  ];
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
