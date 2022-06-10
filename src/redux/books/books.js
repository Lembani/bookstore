const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/books/REMOVE_BOOK';

const books = [];

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const bookObj = {
        id: state.length + 1,
        author: action.book.author,
        book: action.book.book,
      };
      return [...state, bookObj];
    }
    case REMOVE_BOOK: {
      const remove = state.filter((book) => book.id !== action.id);
      return remove;
    }
    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export default booksReducer;
