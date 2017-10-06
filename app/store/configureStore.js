import { compose, createStore, combineReducers } from 'redux';
import { searchCategoryReducer } from '../reducers/index';

export const configure = () => {
  const reducer = combineReducers({
    category: searchCategoryReducer
  });

  const store = createStore(
    reducer,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
  );

  return store;
};
