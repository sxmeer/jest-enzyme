import React from 'react';
import { shallow } from 'enzyme';

import Headline from './index';
import { findByDataAttr, checkProps } from '../../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}

describe('headline component', () => {

  describe('have props', () => {

    let component;

    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      component = setUp(props);
    });

    it('should not throw a warning', () => {
      const expectedProps = {
        header: "test header",
        desc: 'test description',
        tempArr: [{
          fName: 'test fname',
          lName: 'test lname',
          age: 23,
          email: 'test@email.com',
          onlineStatus: false
        }]
      };

      let propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined();

    })

    it('should render without error', () => {
      let wrapper = findByDataAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(1);
    })

    it('should render H1', () => {
      let wrapper = findByDataAttr(component, 'header');
      expect(wrapper.length).toBe(1);
    })

    it('should render desc', () => {
      let wrapper = findByDataAttr(component, 'desc');
      expect(wrapper.length).toBe(1);
    })


  });

  describe('Have no props', () => {
    let component;

    beforeEach(() => {
      component = setUp();
    });
    it('should not render', () => {
      let wrapper = findByDataAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(0);
    })
  })
})