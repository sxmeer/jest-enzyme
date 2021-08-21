import checkPropTypes from 'check-prop-types';

export const findByDataAttr = (component, dataAttr) => {
  const wrapper = component.find(`[data-test='${dataAttr}']`);
  return wrapper;
}

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
}