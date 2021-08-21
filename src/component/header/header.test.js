import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByDataAttr } from './../../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

// test();
// it();  both methods are same

//describe the test, can contain nested test
describe('header component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('should render without errors', () => {
    const wrapper = findByDataAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });
  it('should render a logo', () => {
    const logo = findByDataAttr(component, 'logoIMG');
    expect(logo.length).toBe(1);
  })
})
