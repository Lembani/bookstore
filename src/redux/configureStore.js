import { configureStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categories from './categories/categories';

const reducers = combineReducers({
  booksReducer,
  categories,
});

const store = configureStore(reducers);

export default store;
