import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todoApp from '../components/Redusers/Redusers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(todoApp, composeEnhancers(applyMiddleware(thunk)
));


