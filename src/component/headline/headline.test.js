import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByDataAttr } from '../../../Utils';
import { description } from 'commander';

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