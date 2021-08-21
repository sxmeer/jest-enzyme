import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { rootReducer } from './reducers';

export const middlwares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlwares)(createStore);

export const store = createStoreWithMiddleware(rootReducer);