import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const [id, [item]] = book;
  const dispatch = useDispatch();

  return (
    <>
      <li key={id} className="books-container">
        {item.title}
        {' by '}
        {item.author}
        {' - '}
        {item.category}
      </li>
      <button type="button" id={id} onClick={() => dispatch(removeBook(id))}>Remove</button>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
