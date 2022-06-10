import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categories from './categories/categories';

const reducers = combineReducers({
  booksReducer,
  categories,
});

const store = createStore(reducers);

export default store;
