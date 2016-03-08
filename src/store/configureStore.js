import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
	const finalCreateStore = compose(
		applyMiddleware(thunk, createLogger())
	)(createStore);

	const store = finalCreateStore(rootReducer, initialState);

	if(module.hot) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('../reducers', () => {
	      	const nextRootReducer = require('../reducers').default
	      	store.replaceReducer(nextRootReducer)
	    })
  	}
	
	return store;
}