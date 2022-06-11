import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ysdubPf88eKEHHCzHP2V/books';

const books = [];

export const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const bookObj = {
        item_id: `book${Date.now()}`,
        title: action.book.book,
        author: action.book.author,
        category: 'business',
      };

      const newStateData = [`book${Date.now()}`, [{
        title: action.book.book,
        author: action.book.author,
        category: 'business',
      }]];

      axios.post(baseUrl, bookObj);
      return [...state, newStateData];
    }

    case REMOVE_BOOK: {
      axios.delete(`${baseUrl}/${action.id}`);
      const newData = state.filter((book) => book[0] !== action.id);
      return newData;
    }

    case FETCH_BOOK:
      return action.newBook;
    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export const getBooks = () => (dispatch) => {
  axios.get(baseUrl).then(
    (response) => {
      const data = Object.entries(response.data);
      dispatch({ type: FETCH_BOOK, newBook: data });
    },
  );
};
