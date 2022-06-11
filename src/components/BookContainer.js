import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddBook from './AddBook';
import Books from './Books';
import { getBooks } from '../redux/books/books';

const BookContainer = ({ getUsers }) => {
  const data = useSelector((state) => state.booksReducer);
  const books = data;

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="main-book-container">
        <Books books={books} />
        <AddBook />
      </div>
    </>
  );
};

BookContainer.propTypes = {
  getUsers: PropTypes.func.isRequired,
};

const dispatchToProps = (dispatch) => ({ getUsers: () => dispatch(getBooks()) });

export default connect(null, dispatchToProps)(BookContainer);
