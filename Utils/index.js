export const findByDataAttr = (component, dataAttr) => {
  const wrapper = component.find(`[data-test='${dataAttr}']`);
  return wrapper;
}