import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// Thunk is for async action calls

const initialState = {};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(...middleware)
);

export default store;
