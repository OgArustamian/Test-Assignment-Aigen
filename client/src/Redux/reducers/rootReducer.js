import documentsReducer from './documentsReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  documents: documentsReducer,
});

export default rootReducer;
