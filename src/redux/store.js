import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import users from './reducers/user.reducer';
import plants from './reducers/plants.reducer';

const enhancers = []
const middleware = [thunkMiddleware]

const rootReducer = combineReducers({
	users,
	plants
});

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

const store = createStore(
	rootReducer,
	composedEnhancers
);

export default store;