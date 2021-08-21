import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './../src/reducers';
import { middlwares } from './../src/createStore';

export const findByDataAttr = (component, dataAttr) => {
  const wrapper = component.find(`[data-test='${dataAttr}']`);
  return wrapper;
}

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
}

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlwares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}