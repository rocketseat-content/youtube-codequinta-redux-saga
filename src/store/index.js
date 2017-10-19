import { createStore, combineReducers } from 'redux';

import todos from './reducer';

const store = createStore(combineReducers({
  todos,
}));

export default store;
