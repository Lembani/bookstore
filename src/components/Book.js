import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import progressImage from '../images/completed.png';

const Book = ({ book }) => {
  const [id, [item]] = book;
  const dispatch = useDispatch();

  return (
    <>
      <article className="book-item">
        <div key={id} className="book-details">
          <p className="book-category">{item.category}</p>
          <p className="book-title">{item.title}</p>
          <p className="book-author">{item.author}</p>
          <ul>
            <li>
              <button type="button" id="btn-comments">Comments</button>
            </li>
            <li>
              <button type="button" id="btn-remove" onClick={() => dispatch(removeBook(id))}>Delete</button>
            </li>
            <li>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="progress-image">
          <img src={progressImage} alt="progress" className="image-item" />
        </div>
        <div className="chapter-section">
          <h3>CURRENT CHAPTER</h3>
          <h5>Introduction</h5>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </article>
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
