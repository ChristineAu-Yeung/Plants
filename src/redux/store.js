import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import users from './reducers/user.reducer';
import plants from './reducers/plants.reducer';
import thunkMiddleware from 'redux-thunk';
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