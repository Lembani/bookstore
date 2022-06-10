const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const books = [
  {
    id: 1,
    title: 'The Richest Man In Babylon',
    author: 'George Samuel Clason',
  },
  {
    id: 2,
    title: 'The Lean Startup',
    author: 'Eric Ries',
  },
  {
    id: 3,
    title: 'This Is Marketing',
    author: 'Seth Godin',
  },
];

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const bookObj = {
        id: state.length + 1,
        title: action.book.book,
        author: action.book.author,
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
