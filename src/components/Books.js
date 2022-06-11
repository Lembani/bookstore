import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({ books }) => (
  <section className="container">
    {
      books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))
    }
  </section>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Books;
