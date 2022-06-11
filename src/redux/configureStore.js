import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { booksReducer } from './books/books';
import categories from './categories/categories';
import logger from './logger';

const reducers = combineReducers({
  booksReducer,
  categories,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
